# Météo France Pro

Application météo française (Next.js + TypeScript), indépendante du projet Maroc.

## Démarrage
1. Installer Node.js 20 ou supérieur.
2. `npm install`
3. `npm run dev`
4. Ouvrir http://localhost:3000

## Données météo
- Open-Meteo : prévisions météo sans clé API pour un usage non-commercial conforme à ses conditions.
- OpenStreetMap : fond cartographique via les tuiles publiques. Respecter la politique d'utilisation des tuiles.
- La carte est volontairement présentée comme une première version : les couches sont indicatives et leur disponibilité dépend des fournisseurs.

## Abonnements
Tarifs affichés : Gratuit, Premium mensuel 4,99 USD, Premium annuel 59,99 USD.
Le parcours de paiement est en mode démonstration tant que Stripe n'est pas configuré. Aucun paiement réel n'est collecté.
Pour activer Stripe, installer `stripe`, créer les routes Checkout et webhook côté serveur, configurer les variables `.env` et vérifier les événements signés avant d'accorder Premium. Ne jamais exposer la clé secrète au navigateur.

## À compléter avant production
- Authentification et base de données (par ex. PostgreSQL + Prisma).
- Stripe Checkout + webhook signé + portail client.
- Conditions d'utilisation, politique de confidentialité, consentement cookies et conformité RGPD.
- Fournisseurs/licences pour radar, alertes officielles, qualité de l'air et données marines.
- Tests, surveillance, limites de requêtes et cache.
