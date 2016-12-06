var googleAnalyticsScript = function (gaId) {
  return '<script>' +
    '!function(m,i,k,e,y){m.GoogleAnalyticsObject=k;m[k]||(m[k]=function(){' +
    '(m[k].q=m[k].q||[]).push(arguments)});m[k].l=+new Date;e=i.createElement("script");' +
    'y=i.scripts[0];e.src="//www.google-analytics.com/analytics.js";' +
    'y.parentNode.insertBefore(e,y)}(window,document,"ga");' +

    'ga("create", "' + gaId + '", "auto");' +
    'ga("send", "pageview")' +
  '</script>'
}

var charsetTag = '<meta charset="utf-8"/>'
var viewportTag = '<meta name="viewport" content="width=device-width, initial-scale=1">'
var titleTag = '<title>Trace: Yourself, Discovered</title>'
var optimizelyScriptTag = '<script src="https://cdn.optimizely.com/js/7973740065.js"></script>'

var sharedHeadTags = optimizelyScriptTag + charsetTag + viewportTag + titleTag

var appTag = '<div id="app"></div>'
var scriptTag = function (scriptSrc) {
  return '<script src="/' + scriptSrc + '"></script>'
}

module.exports = {
  dev: function (data) {
    return {
      'index.html': [
        '<html>',
          '<head>',
            sharedHeadTags,
            googleAnalyticsScript(''),
          '</head>',
          '<body>',
            appTag,
            scriptTag(data.main),
          '</body>',
        '</html>'
      ].join('')
    }
  },

  prod: function (data) {
    var config = {
      title: 'AncestorCloud',
      favicon: '/assets/icons/favicon.ico',
      gaId: 'UA-47141819-10'
    }

    var faviconTag = '<link rel="icon" href="' + config.favicon + '" type="image/x-icon" />'
    var stylesheetTag = '<link href="/' + data.css + '" rel="stylesheet" type="text/css" />'

    return {
      'index.html': [
        '<html>',
          '<head>',
            sharedHeadTags,
            faviconTag,
            stylesheetTag,
            googleAnalyticsScript(config.gaId),
          '</head>',
          '<body>',
            appTag,
            scriptTag(data.main),
          '</body>',
        '</html>'
      ].join('')
    }
  }
}
