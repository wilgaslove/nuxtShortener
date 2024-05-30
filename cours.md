## Plugin Nuxt
En Nuxt, les plugins sont utilisés pour injecter des fonctionalités glabales ou pour configurer des bibliothèques tierces qui doivent être initialisées avant que l'application ne démarre.

## Axios plugin
on peut et on utilise souvent axios sous forme de plugin dans une app Nuxt.
**pourquoi ?**
1. Initilisation et Configuration Globale
ON configure axios une seul fois (par exemple definir l'URL de base, les en-tête communs, les interceptuers...) et cette configuration sera partagée partout dans votre app

2. Eviter la redondance
Au lieu de répèter la configuration d'Axios dans chaque composant ou page, vous pouvez centraliser cette configuration, ce qui reduit le risque d'erreurs et rend le code plus propre et plus facile à maintenir.