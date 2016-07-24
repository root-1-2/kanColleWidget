import {Router} from 'chomex';
import * as Controllers from '../Controllers/MessageControllers';

let router = new Router();
router.on('/config/get',             Controllers.GetConfig);
router.on('/config/set',             Controllers.SetConfig);
router.on('/window/open',            Controllers.OpenWindow);
router.on('/window/should-decorate', Controllers.ShouldDecorateWindow);
router.on('/frame/all',              Controllers.GetAllFrames);
router.on('/queues/get',             Controllers.GetQueues);

const MessageListener = router.listener();
export default MessageListener;