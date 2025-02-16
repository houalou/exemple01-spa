<template>
  <div id="app">
    <nav>
      <ul>
        <!-- RouterLink est un composant fourni par "Vue Router" pour créer des liens de navigation 
         dans une application avec routage -->
         <!-- L'attribut to spécifie la route vers laquelle le lien doit pointer -->
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/about">À propos</RouterLink></li>
      </ul>
    </nav>
    <!-- Pour afficher dynamiquement le contenu du composant sélectionné -->
    <RouterView></RouterView>
  </div>
</template>

<script>
// export pour exporter un module en tant que module par défaut
export default {
  // Le nom du composant est 'App'
  name: 'App',
}
</script>

<style>
 nav ul {
  list-style-type: none;
  padding: 0;
 }

 nav li {
  display: inline;
  margin-right: 10px;
 }
</style>
