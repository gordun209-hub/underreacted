---
title: 'npm audit: Broken by Design'
excerpt: 'Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)'
date: '2020-03-16T05:35:07.322Z'
---

npm audit: Broken by Design

July 7, 2021 • ☕️☕️☕️ 14 min read

Security is important. Nobody wants to be the person advocating for less security. So nobody wants to say it. But somebody has to say it.

So I guess I’ll say it.

The way npm audit works is broken. Its rollout as a default after every npm install was rushed, inconsiderate, and inadequate for the front-end tooling.

Have you heard the story about the boy who cried wolf? Spoiler alert: the wolf eats the sheep. If we don’t want our sheep to be eaten, we need better tools.

As of today, npm audit is a stain on the entire npm ecosystem. The best time to fix it was before rolling it out as a default. The next best time to fix it is now.

In this post, I will briefly outline how it works, why it’s broken, and what changes I’m hoping to see.

Note: this article is written with a critical and somewhat snarky tone. I understand it’s super hard to maintain massive projects like Node.js/npm, and that mistakes may take a while to become become apparent. I am frustrated only at the situation, not at the people involved. I kept the snarky tone because the level of my frustration has increased over the years, and I don’t want to pretend that the situation isn’t as dire as it really is. Most of all I am frustrated to see all the people for whom this is the first programming experience, as well as all the people who are blocked from deploying their changes due to irrelevant warnings. I am excited that this issue is being considered and I will do my best to provide input on the proposed solutions! 💜

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique
