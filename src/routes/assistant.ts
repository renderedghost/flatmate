import { Router } from 'express';
import { createAssistantHandler, createThreadHandler, addMessageHandler, runAssistantHandler } from '../controllers/assistant.ts';

const router = Router();

router.post('/create-assistant', createAssistantHandler);
router.post('/create-thread', createThreadHandler);
router.post('/add-message', addMessageHandler);
router.post('/run-assistant', runAssistantHandler);

export default router;