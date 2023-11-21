import Accueil from './components/accueil.vue';
import listecategories from './components/categories/Listecategories.vue';
import Viewarticles from './components/articles/Viewarticles.vue';
import Addarticles from './components/articles/Addarticles.vue';
import addcategories from './components/categories/addcategories.vue';
import editcategories from './components/categories/editcategories.vue';


export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    }
    ,
    {
        name: 'listecategories',
        path: '/listcat',
        component: listecategories
    }
,
    {
        name: "Viewarticle",
        path: "/listart",
        component: Viewarticles
    }
    ,
    {
        name: "Addarticle",
        path: "/addart",
        component: Addarticles
    }
    ,
    {
        name: "addcategorie",
        path: "/addcategorie",
        component: addcategories
    }
    ,
    {
        name: 'editcategorie',
        path: '/editCategory/:id', 
        component: editcategories
    }
];