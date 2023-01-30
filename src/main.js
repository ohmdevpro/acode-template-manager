import plugin from '../plugin.json';
import style from "./style.scss";

/* acode mudules */
const projects = acode.require("projects");
const prompt = acode.require('prompt');
const fileBrowser = acode.require('fileBrowser');
const fsOperation = acode.require('fsOperation');
const helpers = acode.require('helpers');
const loader = acode.require('loader');
const alert = acode.require('alert');
const confirm = acode.require('confirm');

/* plugin class */
class TemplateManager {
    $projectsArray = []; // for storing available project list
    $files; // for storing all files of template while adding
    
    async init($page) {
        $page.id = "acode-template-manager";
        $page.settitle("Template Manager");
        this.$page = $page;
        const searchBtn = tag("span",{
            className:"icon search",
            dataset:{
                action:"search-template"
            }
        });
        const addBtn = tag("span",{
            className:"icon add",
            dataset:{
                action:"add-template"
            }
        });
        addBtn.onclick = this.addTemplate.bind(this);
        searchBtn.onclick = this.toggleSearch.bind(this);
        this.$page.header.append(searchBtn,addBtn);
        this.$style = tag("style",{
            textContent: style,
        });
        document.head.append(this.$style);
        this.$list = tag("ul",{
            className: "list",
        });
        this.$page.append(this.$list);
        
        this.searchBar = tag("div",{
            className: "searchBar"
        });
        this.$searchInput = tag("input",{
            type: "search",
            className: "searchInput",
            placeholder: "Search template name(for eg: html)",
        });
        this.$searchInput.onkeyup = this.searchTemplate.bind(this);
        this.searchBar.append(this.$searchInput);
        this.$page.append(this.searchBar);
        
        const fs = fsOperation(window.DATA_STORAGE+"projects.json");
        if (await fs.exists()) {
            const fileContent = await fs.readFile("utf8");
            await this.setTemplates(fileContent);
        }
        
        /* adding a command to command pallete*/
        editorManager.editor.commands.addCommand({
            name: "template-manager",
            description: "Template Manager",
            exec: this.run.bind(this),
        });
        /* loading all available project list*/
        this.loadAllAvailableTemplate();
    }
    
    async run(){
        this.$page.show()
    }
    
    async setTemplates(fileContent){
        const allTemplates = JSON.parse(fileContent);
        allTemplates.forEach(obj => {
            if (!projects.get(obj.name)) {
                projects.set(obj.name,async () => { return obj.files},obj.icon);
            }
        });
    }
    
    async loadAllAvailableTemplate(){
        this.$projectsArray = [];
        const allProject = projects.list();
        this.$projectsArray = allProject;
        this.$list.innerHTML = "";
        for (let i = 0; i < allProject.length; i++) {
            const projList = tag("li",{
                className: "swipe-container",
                id: allProject[i].name
            });
            const swipeElement = tag("div",{
                className: "swipe-element",
            });
            const projectIcon = tag("span",{
                className: `project_icon icon ${allProject[i].icon}`,
            });
            const projectNme = tag("span",{
                className: `project_nme`,
                textContent: allProject[i].name,
            });
            
            swipeElement.append(...[projectIcon,projectNme]);
            const rightItem = tag('div',{
                className: "action rightItem",
                child: tag("span",{
                    className: "delete_icon icon delete"
                })
            });
            projList.append(...[swipeElement,rightItem]);
            this.$list.append(projList);
            projList.addEventListener("touchend", this.handleSwipe.bind(this));
        }
    }
    
    async handleSwipe(event){
        const minDistance = 185;
        const container = event.currentTarget;
        const swipeDistance = container.scrollLeft - container.clientWidth;
        
        if (swipeDistance < minDistance * -1) {
            return;
        } else if (swipeDistance < minDistance) {
            const confirmation = await confirm("Confirm Template Deletion","Are you sure you want to delete this template? This template cannot be restored.");
            if (confirmation) {
                projects.delete(container.id);
                const allTemplates = projects.list();
                const newTemplateList = allTemplates.filter(obj => {
                    return obj.name !== container.id;
                });
                await fsOperation(window.DATA_STORAGE+"projects.json").writeFile(JSON.stringify(newTemplateList));
                this.loadAllAvailableTemplate();
                window.toast("Deleted",3000);
            }
        }
    }
    
    async addTemplate(){
        try{
            const options = {
                required: true,
                placeholder: 'Template Name(for eg:html)',
                test: (value) => {
                    return this.$projectsArray.every(obj => obj.name != value.toLowerCase());
                },
            };
            
            let templateName = await prompt('Enter Template Name', '', 'text', options);
            const templateFolder = await fileBrowser("folder","Select folder which cantains all template file");
            if(!templateFolder) return;
            const fs = fsOperation(templateFolder.url);
            this.$files={};
            let iconSrc;
            const folderContent = await fs.lsDir();
            templateName=templateName.replace(/\s/g, "");
            let templateFolderName = `${templateName.toLowerCase()}-project-template`;
            if (templateFolder.name != templateFolderName) {
                alert("Error","Invalid folder name");
                return;
            }
            loader.create("loading","adding files...");
            for(let i=0;i<folderContent.length;i++){
                const fileInfo = await fsOperation(folderContent[i].url).stat();
                if (fileInfo.isDirectory) {
                    this.readFolderContent(folderContent[i].url,templateFolderName);
                }else{
                    if (folderContent[i].name.startsWith("icon.")) {
                        iconSrc = await this.setIconForTemplate(folderContent[i].url);
                    }else{
                        const arrayBuffer = await fsOperation(folderContent[i].url).readFile();
                        let fileNme = folderContent[i].url.substring(folderContent[i].url.indexOf(templateFolderName) + templateFolderName.length + 1);
                        const fileContent = helpers.decodeText(arrayBuffer);
                        this.$files[fileNme] = fileContent;
                    }
                }
            }
            let data = {
                name:templateName.toLowerCase(),
                files:this.$files,
                icon:iconSrc
            }
            await this.saveNewTemplate(data);
            const fileContent = await fsOperation(window.DATA_STORAGE+"projects.json").readFile("utf8");
            await this.setTemplates(fileContent);
            this.$files={};
            iconSrc="";
            loader.destroy();
            alert("Success","New template is added 🥳🎉🚀");
            this.loadAllAvailableTemplate();
        } catch (e){
            window.toast(e,4000)
        }
    }
    
    async saveNewTemplate(newData){
        try{
            const fs = fsOperation(window.DATA_STORAGE+"projects.json");
            if(!await fs.exists()){
                await fsOperation(window.DATA_STORAGE).createFile('projects.json');
                await fs.writeFile("[]");
            }
            let json;
            json = JSON.parse(await fs.readFile("utf8"));
            if (!Array.isArray(json)) {
                json = [];
            }
            json.push(newData);
            const content = JSON.stringify(json);
            await fs.writeFile(content);
        } catch (e){
            window.toast(e,4000)
        }
    }
    
    async setIconForTemplate(iconPath){
        const fs = fsOperation(iconPath);
        const fileInfo = await fs.stat();
        const binData = await fs.readFile();
        const fileContent = helpers.decodeText(binData);
        
        if (helpers.isBinary(fileContent)) {
          if (/image/i.test(fileInfo.type)) {
            const blob = new Blob([binData], { type: fileInfo.type });
            const base64 = await helpers.blobToBase64(blob);
            return base64;
          }
        }
    }
    
    async readFolderContent(folderPath,templateFolderName){
        try {
            const fs = fsOperation(folderPath);
            const folderContent = await fs.lsDir();
            for(let i=0;i<folderContent.length;i++){
                const fileInfo = await fsOperation(folderContent[i].url).stat();
                if (fileInfo.isDirectory) {
                    this.readFolderContent(folderContent[i].url,templateFolderName)
                }else{
                    const arrayBuffer = await fsOperation(folderContent[i].url).readFile();
                    let fileNme = folderContent[i].url.substring(folderContent[i].url.indexOf(templateFolderName) + templateFolderName.length + 1);
                    const fileContent = helpers.decodeText(arrayBuffer);
                    this.$files[fileNme] = fileContent;
                }
            }
        } catch (e) {
            window.toast(e,4000);
        }
    }
    
    async toggleSearch(){
        if (this.searchBar.classList.contains("open")) {
            this.searchBar.classList.remove("open");
            this.$searchInput.value = "";
            this.loadAllAvailableTemplate();
            this.$list.style.marginTop = "0px";
        }else{
            this.searchBar.classList.add("open");
            this.$list.style.marginTop = "50px";
        }
    }
    
    async autocompleteMatch(query){
        query = query.toLowerCase();
        if (query == '') {
            return [];
        }
        let regex = new RegExp(query.split('').join('.*'));
        
        let suggestion = this.$projectsArray.filter(({name}) => {
            return regex.test(name);
        });
        return suggestion;
    }
    
    async searchTemplate(){
        let query = this.$searchInput.value;
        this.$list.innerHTML = '';
        let terms = await this.autocompleteMatch(query);
        if (terms.length == 0) {
            this.$list.innerHTML = '<li>Not Found 🚫</li>';
        } else {
            terms.forEach(obj => {
                const projList = tag("li",{
                    className: "swipe-container",
                    id: obj.name
                });
                const swipeElement = tag("div",{
                    className: "swipe-element",
                });
                const projectIcon = tag("span",{
                    className: `project_icon icon ${obj.icon}`,
                });
                const projectNme = tag("span",{
                    className: `project_nme`,
                    textContent: obj.name,
                });
                swipeElement.append(...[projectIcon,projectNme]);
                const rightItem = tag('div',{
                    className: "action rightItem",
                    child: tag("span",{
                        className: "delete_icon icon delete"
                    })
                });
                projList.append(...[swipeElement,rightItem]);
                this.$list.append(projList);
                projList.addEventListener("touchend", this.handleSwipe.bind(this));
            });
        }
    }
    
    async destroy() {
        editorManager.editor.commands.removeCommand("template-manager");
    }
}

if (window.acode) {
    const acodePlugin = new TemplateManager();
    acode.setPluginInit(plugin.id, (baseUrl, $page, {
        cacheFileUrl, cacheFile
    }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}