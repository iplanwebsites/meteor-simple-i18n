// A simple Meteor internationalization
//
// @author Tarcísio Gruppi <txgruppi@gmail.com>
// @version 0.3.0
// @date 2013-03-27

(function(){
  // Register a Handlebars helper named `t`
  // Try to translate a string using `I18n.prototype.t`
  //
  // Use `Meteor.I18n().sprintf` to return a formated string
  //
  // Usage:
  // <pre>&lt;template name="greeting"&gt;
  //   {{t "Hi, %s", userName}}
  // &lt;/template&gt;</pre>
  //
  // @see `I18n.prototype.t`
   Handlebars.registerHelper('t', function(object){ 
    if(! Meteor.i18n){
      // return '...'; // return dummy string before we can access the i18n global instance
      var i18n = Meteor.I18n(OPTIONS_i18n) ;// create a new instance (inneficient)
    }else{
      var i18n = Meteor.i18n;
    }
    
    var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
    args[0] = i18n.t(args[0]);
    if (args.length > 1) {
      return i18n.sprintf.apply(i18n.sprintf, args);
    } else {
      return args[0];
    }
  });
})();
