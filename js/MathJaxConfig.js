MathJax.Ajax.config.path["mhchem"] = "../MathJax/extensions/TeX/mhchem3";
MathJax.Hub.Config({
    messageStyle: 'none',
    tex2jax: {
        inlineMath: [
        ['$', '$'],
        ["\\(", "\\)"]
        ],
        displayMath: [
        ['$$', '$$'],
        ["\\[", "\\]"]
        ],
        processEscapes: true
    },
    TeX: {
        extensions: ["[mhchem]/mhchem.js"]
    },
});
