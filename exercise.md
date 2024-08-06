### Exercice de Test pour Développeurs Juniors en Next.js et LLM

#### Vue d'ensemble de l'exercice

L'objectif de cet exercice est d'évaluer votre compréhension de Next.js, React et de l'intégration basique avec un modèle de langage (LLM). Vous allez créer une simple application web qui permet aux utilisateurs de saisir une invite et de recevoir une réponse d'une API de modèle de langage pré-entraîné (comme GPT-3/GPT-4 de OpenAI).

#### Description de la tâche

Vous allez créer une application Next.js simple avec les fonctionnalités suivantes :

1. **Interface Utilisateur** :
   - Un champ de saisie de texte où les utilisateurs peuvent entrer une invite.
   - Un bouton pour soumettre l'invite.
   - Une section pour afficher la réponse du LLM.

2. **Intégration API** :
   - Intégrer une API LLM fictive pour obtenir la réponse basée sur l'invite de l'utilisateur.

3. **Gestion de l'État** :
   - Gérer l'état pour traiter les entrées de l'utilisateur et la réponse récupérée.

#### Exigences

- **Frontend** :
  - Utilisez React avec des composants fonctionnels et des hooks.
  - Utilisez Next.js pour le rendu côté serveur et le routage.
  - Stylisez l'application en utilisant CSS ou une solution CSS-in-JS (comme styled-components).

- **Backend** :
  - Utilisez les routes API de Next.js pour traiter la requête vers l'API LLM fictive.
  - Simulez un appel à une API externe au sein de la route API (car les clés API réelles ne doivent pas être utilisées).

#### API Fictive

Pour cet exercice, utilisez le point de terminaison API fictif suivant :

```javascript
// pages/api/getResponse.js
export default async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "L'invite est requise" });
  }
  // Simulez une réponse d'un LLM
  const mockResponse = {
    response: `Vous avez dit : ${prompt}`,
  };
  res.status(200).json(mockResponse);
};
```

#### Étapes pour Compléter la Tâche

1. **Configurer le Projet Next.js** :
   - Créez un nouveau projet Next.js en utilisant `create-next-app`.
   - Configurez la structure de base des dossiers.

2. **Créer l'Interface Utilisateur** :
   - Créez une page avec un champ de saisie de texte et un bouton de soumission.
   - Ajoutez une section pour afficher la réponse du LLM.

3. **Gérer l'Entrée Utilisateur et Récupérer la Réponse** :
   - Utilisez les hooks de React pour gérer l'état (useState) et les effets secondaires (useEffect).
   - Créez une fonction pour traiter la soumission du formulaire, en envoyant l'invite à la route API backend.
   - Affichez la réponse reçue du backend.

4. **Créer la Route API Backend** :
   - Implémentez la route API pour traiter les requêtes et retourner la réponse fictive.

5. **Styliser l'Application** :
   - Ajoutez des styles de base pour rendre l'application visuellement attrayante. PS: vous pouvez utiliser tailwind css.

#### Livrables

-  l'application Next.js complète.
- Un fichier README.md avec des instructions sur la configuration et l'exécution de l'application.

#### Critères d'Évaluation

- **Exactitude** : L'application répond-elle aux exigences décrites dans la tâche ?
- **Qualité du Code** : Le code est-il bien structuré, lisible et maintenable ?
- **Gestion de l'État** : L'état est-il correctement géré en utilisant les hooks de React ?
- **Intégration API** : La route API est-elle correctement implémentée et intégrée avec le frontend ?
- **Style** : L'application est-elle correctement stylisée ?

#### Points Bonus

- **Gestion des Erreurs** : Implémentez la gestion des erreurs pour les requêtes réseau et les entrées utilisateur.
- **États de Chargement** : Affichez un indicateur de chargement pendant la récupération de la réponse de l'API.
- **Design Réactif** : Assurez-vous que l'application est réactive et fonctionne bien sur différentes tailles d'écran.

