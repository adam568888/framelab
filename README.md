# FrameLab — site vitrine (starter)

## Ouvrir le site
1. Décompresse `framelab-starter.zip`.
2. Ouvre le dossier `framelab-starter`.
3. Double-clique sur `index.html` pour afficher le site dans ton navigateur.
4. Pour modifier le code, ouvre le dossier dans Visual Studio Code.

## Fichiers
- `index.html` : structure et contenu des pages (site vitrine sur une page).
- `styles.css` : couleurs, mise en page et adaptation mobile.
- `script.js` : menu mobile, année automatique et validation de démonstration du formulaire.

## À personnaliser
- Remplace les exemples de portfolio par tes propres vidéos.
- Ajoute tes coordonnées professionnelles.
- Ajuste les textes et les services quand ton offre sera définie.
- Ne présente pas les cartes du portfolio comme des commandes réellement réalisées : elles sont indiquées comme concepts.

## Important : paiements
Ce projet est uniquement un **site vitrine front-end**. Il ne prend aucun paiement et ne stocke aucune donnée de carte bancaire.
Pour activer les commandes et les paiements, il faudra ajouter :
1. Un backend (par exemple Node.js) pour créer les commandes et calculer les montants côté serveur.
2. Une base de données pour suivre les clients, devis, commandes et statuts.
3. Un prestataire de paiement (par exemple Stripe), avec une session de paiement créée côté serveur.
4. Une vérification serveur de la confirmation du paiement via webhook signé.
5. Une gestion sécurisée des fichiers envoyés par les clients et des livraisons.
6. Les mentions légales, CGV, politique de confidentialité et informations obligatoires applicables.

Ne mets jamais de clé secrète Stripe dans `script.js`, `index.html` ou un autre fichier envoyé au navigateur. Ne considère jamais le simple retour du navigateur sur une page de succès comme une preuve de paiement.

Avant de vendre, vérifie le statut juridique, la facturation, les obligations fiscales et les règles de vente à distance applicables à ton activité.


## Motion Edition
Animations au défilement, barre de progression, lumière suivant la souris, effet 3D sur le visuel, reflets et bandeau animé. Les animations sont désactivées si l'utilisateur préfère limiter les mouvements. Le formulaire reste une démo sans envoi réel.


## Sections Paiement et Nous contacter
Le menu propose des ancres vers `#paiement` et `#contact`. La section paiement présente le parcours de règlement et les moyens envisagés ; **aucun paiement réel n’est activé**. Le formulaire de contact est une maquette et **n’envoie aucune donnée**. Pour lancer le site commercialement, connecter un service de contact et un prestataire de paiement via une intégration sécurisée (backend + webhooks), et compléter les mentions légales/CGV.


## Liens Stripe intégrés
Les huit offres sont connectées aux Payment Links fournis par le propriétaire, en **mode test**. Aucun encaissement réel. Pour la production, remplacer chaque URL test par un lien Stripe actif et tester les montants. Le formulaire de contact reste une démonstration et doit être relié à Formspree. Ne pas utiliser la page de retour Stripe comme preuve de paiement.


## Formulaire opérationnel (Formspree)
Le formulaire de contact utilise https://formspree.io/f/xoeezqry via POST. Vérifiez que l’adresse de réception est validée dans Formspree. Testez un envoi sur GitHub Pages. Le navigateur est redirigé vers la confirmation Formspree après soumission. Ne publiez pas de données personnelles de clients dans le dépôt. Les huit liens Stripe présents sont en mode TEST et ne permettent pas d’encaisser des paiements réels.
