import './style.css';
import { header } from './modules/header.js';
import { mainContent } from './modules/mainContent.js';
import { footer } from './modules/footer.js';
//import { toDoList } from './modules/listLogic.js';

function pageInit() {
    document.body.append(header());
    document.body.append(mainContent());
    document.body.append(footer());
}

pageInit()