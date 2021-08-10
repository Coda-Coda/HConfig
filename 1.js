// Hypothesis Config Helper for Daniel Britten's Public Zettelkasten
window.hypothesisConfig = function () {
	return {
		"showHighlights": true
	};
};

var blogMetadata = document.createElement('meta');
blogMetadata.name="dc.relation.ispartof";
blogMetadata.content="Public-Zettelkasten-Daniel-Britten-(ORCID-0000-0002-7860-3595)";
document.head.appendChild(blogMetadata);

function setZettelMetadata(zettelId) {
	var zettelMetadata = document.createElement('meta');
	zettelMetadata.name="dc.identifier";
	zettelMetadata.content=zettelId;
	document.head.appendChild(zettelMetadata);
}