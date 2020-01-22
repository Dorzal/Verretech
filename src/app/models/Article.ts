import Category from './Category';
import Tag from './Tag';

export default class Article {

    id: number;
    category : Category[];
    name: string;
    photoUrls : [
        string
    ];
    tags : Tag[];
    status : string;


}