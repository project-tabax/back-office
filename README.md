# Tabax Construire — Back-Office (maquette)

Maquette HTML/CSS/JavaScript navigable du Back-Office d'administration de la
plateforme d'adhésion **Tabax Construire**. Aucune dépendance, aucun backend :
des données fictives réalistes et des interactions frontend (navigation,
recherche, filtres, modales, changements de statut, toasts).

L'identité visuelle (palette, typographies, rayons, ombres, style des cards et
boutons) est **extraite du site vitrine** afin que vitrine et back-office
donnent l'impression d'appartenir au même produit.

## Lancer

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python -m http.server 8000
# puis http://localhost:8000
```

## Structure

```
index.html      Shell : sidebar + header + zone de contenu
css/app.css     Design system (variables CSS extraites du vitrine)
js/data.js      Données fictives (adhérents, transactions, notifications)
js/app.js       Routeur SPA, rendu des pages, interactions
```

## Pages

- **Tableau de bord** — KPI, évolution des adhésions, répartition par région,
  dernières adhésions et transactions.
- **Adhérents** — tableau + recherche/filtres/pagination, ajout, modification,
  suspension/réactivation, suppression, fiche profil + historique cotisations.
- **Cotisations** — transactions PayDunya (Wave, Orange Money, Wizall, E-Money,
  Free Money, Visa/Mastercard), détail transaction.
- **Cartes de membre** — carte virtuelle, QR Code, export PDF/PNG.
- **Notifications** — emails et SMS, statut d'envoi.
- **Rapports & Exports** — CSV / Excel / PDF avec filtres.
- **Paramètres** — général, notifications, paiement, administrateurs.

## Palette (extraite du vitrine)

| Rôle | Valeur |
|------|--------|
| Rouge primaire | `#D51624` |
| Rouge foncé (hover) | `#b0021a` |
| Navy (secondaire) | `#001d39` |
| Fond appli | `#f3f4f6` |
| Succès / Alerte / Danger | `#27ae60` / `#e0a400` / `#d0021b` |
| Typographies | Poppins (titres), Inter (corps) |
