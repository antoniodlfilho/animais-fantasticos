import ScrollSuave from "./modules/scroll-suave.js";
import initAccordion from "./modules/accordion-animacao.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import iniTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch.bitcoin.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
iniTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
