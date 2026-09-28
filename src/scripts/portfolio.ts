import { initPlurGrid } from './background/plur-grid';
import { initRacers } from './background/racers';
import { initContactForm } from './contact';
import { initGalleries } from './gallery';
import { initI18n } from './i18n';
import { initMenu } from './menu';
import { initNavLight } from './navigation/nav-light';
import { initTheme } from './theme';
import { initSectionToggles } from './section-toggle';

const updatePlurGrid = initPlurGrid();

initI18n();
initTheme(updatePlurGrid);
initMenu();
initRacers();
initNavLight();
initSectionToggles();
initGalleries();
initContactForm();
