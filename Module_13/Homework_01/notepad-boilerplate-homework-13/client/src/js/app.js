import { refreshList } from './mvc/view';
import './mvc/controller';
import { notepad } from './mvc/model';


notepad.getAsyncNotes().then(data => refreshList(data))