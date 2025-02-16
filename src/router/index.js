import {createRouter, createWebHistory} from 'vue-router';
// Importer les composants "HomePage.vue" et "AboutPage.vue"
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';

// Configuration de routage
// Déclaration d'un tableau contenant 2 objets, chacun représentant une route.
const routes = [
    // "/" présente la route racine, c'est à dire la page d'acceuil de l'application
    // Il s'agit du composant HomePage (le nom du composant doit contenir 2 mots) 
    {path: '/', component: HomePage},
    // Le chemin de l'URL pour la route "/about"
    // AboutPage est le composant qui sera rendu pour la route "/about"
    {path: '/about', component: AboutPage}
];

// createRouter est une fonction de Vue Router pour créer une instance de router
// Objet de configuration fourni à createRouter contient deux propriétés
// history pour gérer l'historique de navigation grâce à la fonction createWebHistory
// la constante routes déclarées plus haut 
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;