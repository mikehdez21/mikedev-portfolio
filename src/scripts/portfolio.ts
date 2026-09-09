import { initPlurGrid } from './background/plur-grid';
import { initRacers } from './background/racers';
import { initMenu } from './menu';
import { initNavLight } from './navigation/nav-light';
import { initTheme } from './theme';

const updatePlurGrid = initPlurGrid();

initTheme(updatePlurGrid);
initMenu();
initRacers();
initNavLight();
