import { combineReducers } from 'redux';
import room from './room';
import me from './me';
import producers from './producers';
import peers from './peers';
import consumers from './consumers';
import notifications from './notifications';
import chatmessages from './chatmessages';
import chatbehavior from './chatbehavior';
import toolarea from './toolarea';
import files from './files';

const reducers = combineReducers(
	{
		room,
		me,
		producers,
		peers,
		consumers,
		notifications,
		chatmessages,
		chatbehavior,
		toolarea,
		files
	});

export default reducers;
