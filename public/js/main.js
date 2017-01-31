var quotes = [
    {
        quote: "Aujourd’hui, parce que la connaissance est disponible sur chaque appareil connecté, ce que vous connaissez compte moins que ce que vous pouvez faire avec. La capacité d’innover, la capacité à résoudre des problèmes ou donner naissance à de nouvelles possibilités et les aptitudes telles que la pensée critique, la communication et la collaboration sont de loin plus importantes que les connaissances académiques.",
        author: "Dr. Tony Wagner, Expert In Residence at Harvard University’s new Innovation Lab"
    },
    {
        quote: "La seule façon de comprendre une nouvelle culture et de nouveaux comportements est de devenir natif. Devenir natif est un processus d’observation, d’apprentissage et d’approfondissement, pratiqué tel un anthropologiste, impliqué directement sur le terrain et en participant étroitement avec ses hôtes à leurs cultures.",
        author: "Brian Solis – Digital Analyst"
    },
    {
        quote: "Il n’y a jamais eu une telle période de promesses et de menaces. […] Nous devons développer une lecture claire et globale quant à l’impact des technologies sur nos vies et comment elles reconditionnent notre environnement économique, social, culturel et humain.",
        author: "Klaus Schwab, Founder and Executive Chairman, World Economic Forum"
    },
    {
        quote: "Jour après jour, il semble donc qu'à travers son accessibilité, sa quasi-exhaustivité, sa gratuité, sa diversité, le numérique offre les garanties d'un paysage culturel idéal.",
        author: "Digital citizen: Manifeste pour une citoyenneté numérique"
    },
    {
        quote: "J’essaie de me demander pour chaque technologie que j’utilise en quoi elle accroît ma puissance personnelle, de pensée, d’émotion, de liberté, et en quoi elle me mutile ? Cette question, il faut vraiment l’avoir pour soi et collectivement.",
        author: "Alain Damasio"
    },
    {
        quote: "Nous créons un monde où tous peuvent entrer, sans privilège ni préjugé dicté par la race, le pouvoir économique, la puissance militaire ou le lieu de naissance.",
        author: "John Perry Barlow"
    },
    {
        quote: "Aujourd'hui nul besoin d'aller à l'université, de se balader avec son portfolio, de faire de la lèche aux galeries et leurs nuées de prétentieux, pas besoin non plus de coucher avec quelqu'un d'influent. Tout ce qu'il vous faut c'est quelques idées et une connexion haut débit. Pour la première fois le monde bourgeois de l'art appartient au peuple. Il s'agit d'en faire quelque chose.",
        author: "Banksy"
    },
    {
        quote: "[...] la technologie pourrait fournir à chaque homme la possibilité de mieux comprendre son milieu, de le façonner de ses propres mains, de communiquer mieux que par le passé. Cette utilisation de la technologie, à rebours des tendances actuelles, constitue la véritable alternative au problème de l'éducation.",
        author: "Ivan Illich"
    }
];

console.log(quotes[0]);

	$(document).ready(function() {
		$('.scroll').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 800; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
