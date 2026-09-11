import { initPlurGrid } from './background/plur-grid';
import { initRacers } from './background/racers';
import { initMenu } from './menu';
import { initNavLight } from './navigation/nav-light';
import { initTheme } from './theme';
import { initSectionToggles } from './section-toggle';

const updatePlurGrid = initPlurGrid();

initTheme(updatePlurGrid);
initMenu();
initRacers();
initNavLight();
initSectionToggles();
