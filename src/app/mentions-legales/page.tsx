export default function MentionsLegales() {
  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Éditeur du site</h2>
              <p><strong>Thomas Menu</strong></p>
              <p>Auto-entrepreneur - Consulting en technologies informatiques et IoT</p>
              <p>Développement web, mobile et Unity</p>
              <p>Adresse : Toulouse, France</p>
              <p>Email : menu.techvision@gmail.com</p>
              <p>Téléphone : 06 44 81 36 46</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Directeur de publication</h2>
              <p>Le directeur de publication est Thomas Menu, auto-entrepreneur.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <p><strong>Netlify, Inc.</strong></p>
              <p>2325 3rd Street, Suite 296, San Francisco, California 94107</p>
              <p>Site web : <a href="https://netlify.com" className="text-primary-600 hover:text-primary-700">https://netlify.com</a></p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Propriété intellectuelle</h2>
              <p>
                Tous les éléments de ce site (textes, images, sons, séquences, animations, vidéos, programmes) 
                sont la propriété exclusive de Thomas Menu, à l&apos;exception des marques, logos ou contenus 
                appartenant à d&apos;autres sociétés partenaires ou auteurs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                à différentes périodes de l&apos;année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Liens hypertextes</h2>
              <p>
                Les sites internet de tiers auxquels renvoient les liens présents sur ce site n&apos;engagent pas 
                la responsabilité de Thomas Menu quant au contenu de ces sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Collecte des données</h2>
              <p>
                Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD, 
                l&apos;utilisateur dispose d&apos;un droit d&apos;accès, de rectification et de suppression des données le concernant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Cookies</h2>
              <p>
                Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. 
                Aucun cookie de tracking ou publicitaire n&apos;est utilisé.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
