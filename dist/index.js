import { Model } from './src/firestore-eloquent';
class T extends Model {
    fillable() {
        return ['name'];
    }
}
