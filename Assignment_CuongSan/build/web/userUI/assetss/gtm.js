
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"649",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(window.optimizely){var a=optimizely;if(a.activeExperiments\u0026\u0026a.allExperiments)for(var c=0;c\u003Ca.activeExperiments.length;c++){var d=a.activeExperiments[c],b=a.allExperiments[d];if(b\u0026\u0026b.universal_analytics\u0026\u0026(b=b.universal_analytics.slot,2==b\u0026\u0026a.variationIdsMap\u0026\u0026a.variationNamesMap))return a.variationIdsMap[d]+\": \"+a.variationNamesMap[d]}}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return a=a.getAttribute(\"data-target\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return a=a.getAttribute(\"data-state\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return a=a.getAttribute(\"data-navigate-btn\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return a=a.getAttribute(\"data-btn\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.document.body.getAttribute(\"class\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Math.round((new Date).getTime()\/1E3);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.href,b=a.split(\"#\"),c=\"https:\/\/signup.na.leagueoflegends.com\/en\/a2\/signup\/download\";if(-1\u003Cb.indexOf(\"\/download\")||a===c)return\"Signup Conversion Page\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=window.localStorage.getItem(\"signup\");if(b){var a=JSON.parse(b);a.expires\u0026\u0026(new Date).getTime()\u003Ea.expires\u0026\u0026(a=null)}}catch(c){a=\"error\"}return a.id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=window.localStorage.getItem(\"signup\");if(b){var a=JSON.parse(b);a.expires\u0026\u0026(new Date).getTime()\u003Ea.expires\u0026\u0026(a=null)}}catch(c){a=\"error\"}return a.region})();"]
    },{
      "function":"__u"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"eventLabel",
      "vtp_defaultValue":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"notice_preferences"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"notice_gdpr_prefs"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dimension5"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"performance_test"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"eventCategory",
      "vtp_defaultValue":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"eventAction",
      "vtp_defaultValue":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"eventValue",
      "vtp_defaultValue":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":true
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"playForFreeSignUp"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"download"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"puuid"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"AdmitadUID"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_term"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\/\/694-ct.c3tag.com\/c3metrics-694.js?c3_type\\x3d2\\x26account_id\\x3d",["escape",["macro",40],7],"\\x26c3ps\\x3d[region\\x3d",["escape",["macro",10],7],"]\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\/\/694-ct.c3tag.com\/c3metrics-694.js?c3_type\\x3d0\\x26account_id\\x3d",["escape",["macro",40],7],"\\x26c3ps\\x3d[region\\x3d",["escape",["macro",10],7],"]\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\/\/694-ct.c3tag.com\/c3metrics-694.js?c3_type\\x3d1\\x26account_id\\x3d",["escape",["macro",40],7],"\\x26c3ps\\x3d[region\\x3d",["escape",["macro",10],7],"]\";return a})();"]
    },{
      "function":"__f"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"dimension5"
    },{
      "function":"__v",
      "vtp_name":"signupCode",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_component":"URL",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"eventNonInt",
      "vtp_defaultValue":"eventNonInt",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"download"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"PVPNET_ID_NA"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"play_splash_count"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"using_cookie_policy_v2"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    }],
  "tags":[{
      "function":"__ua",
      "priority":2,
      "setup_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_functionName":"ga",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",0]],["map","index","5","dimension",["macro",21]],["map","index","6","dimension",["macro",20]],["map","index","11","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":13
    },{
      "function":"__opt",
      "priority":1,
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_useDebugVersion":false,
      "vtp_trackerName":"",
      "vtp_functionName":"ga",
      "vtp_optimizeContainerId":"GTM-NGMGT5",
      "vtp_trackingId":"UA-5859958-1",
      "tag_id":305
    },{
      "function":"__ua",
      "vtp_trackingId":"UA-34264223-1",
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_useDebugVersion":false,
      "vtp_autoLinkDomains":"signup.leagueoflegends.com,kayit.leagueoflegends.com.tr",
      "vtp_enableLinkId":false,
      "vtp_decorateFormsAutoLink":true,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_useHashAutoLink":false,
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":2
    },{
      "function":"__awct",
      "vtp_conversionId":"1002545515",
      "vtp_conversionLabel":"uQ-BCOX9uQMQ68KG3gM",
      "vtp_conversionValue":"0",
      "vtp_url":["macro",14],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":3
    },{
      "function":"__ga",
      "vtp_webPropertyId":"UA-34264223-1",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_allowLinker":false,
      "vtp_allowAnchor":false,
      "vtp_allowHash":true,
      "vtp_doubleClick":false,
      "vtp_ignoredRef":["list"],
      "vtp_ignoredOrganic":["list"],
      "vtp_anonymizeIp":false,
      "vtp_enableInPageLinkId":false,
      "vtp_campaignTrack":true,
      "vtp_clientInfo":true,
      "vtp_detectFlash":true,
      "vtp_detectTitle":true,
      "vtp_sendHitsToGoogle":true,
      "vtp_cookiePathCopy":["list"],
      "vtp_useDebugVersion":false,
      "vtp_forceSsl":false,
      "vtp_eventCategory":"Client",
      "vtp_eventAction":"Download",
      "vtp_eventLabel":"Success",
      "vtp_eventValue":"0",
      "vtp_nonInteraction":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__sp",
      "vtp_conversionId":"1002545515",
      "vtp_conversionLabel":"1UGgCMWmuwMQ68KG3gM",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":7
    },{
      "function":"__ua",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-42372676-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":28
    },{
      "function":"__awct",
      "vtp_conversionId":"984144757",
      "vtp_conversionLabel":"NX1MCLujmQcQ9baj1QM",
      "vtp_conversionValue":"0",
      "vtp_url":["macro",14],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":33
    },{
      "function":"__sp",
      "vtp_conversionId":"984144757",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":34
    },{
      "function":"__sp",
      "vtp_conversionId":"1012174859",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"PgFsCP3Q9QQQi6DS4gM",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":39
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"lead",
      "vtp_useImageTag":false,
      "vtp_activityTag":"register",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4417164",
      "vtp_ordinalStandard":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":40
    },{
      "function":"__flc",
      "vtp_customVariable":["list",["map","key","u2","value","SignUpForm"]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"counter",
      "vtp_useImageTag":false,
      "vtp_activityTag":"counter",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4417164",
      "vtp_ordinalStandard":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":41
    },{
      "function":"__flc",
      "vtp_customVariable":["list",["map","key","u2","value","DownloadPage"]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"counter",
      "vtp_useImageTag":false,
      "vtp_activityTag":"counter",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4417164",
      "vtp_ordinalStandard":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":49
    },{
      "function":"__ua",
      "vtp_trackingId":"UA-58571977-1",
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_decorateFormsAutoLink":true,
      "vtp_doubleClick":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_useHashAutoLink":false,
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":71
    },{
      "function":"__ua",
      "vtp_trackingId":"UA-58571977-2",
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_useHashAutoLink":false,
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":73
    },{
      "function":"__ua",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-27",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"redirect",
      "vtp_eventLabel":"geo-redirect-na",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","6","dimension",["macro",20]],["map","index","5","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_enableEcommerce":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_doubleClick":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_eventLabel":"Twitter",
      "vtp_enableLinkId":false,
      "vtp_eventCategory":"Boards - The Climb",
      "vtp_eventAction":"Social Share",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":130
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_enableEcommerce":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_doubleClick":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_eventLabel":"Download Click",
      "vtp_enableLinkId":false,
      "vtp_eventCategory":"Click Actions",
      "vtp_eventAction":"Click",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":165
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",13],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventValue":["macro",27],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","6","dimension",["macro",20]],["map","index","5","dimension",["macro",21]],["map","index","11","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":175
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Bard - Cosmic Relief",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":191
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Link - Bard - Cosmic Relief",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":192
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Ekko - Break time",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":193
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Champion Pool",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":194
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Tahn - Gobblin King",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":195
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Pirate - Pirate bait",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Riven - Pixel Perfect",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":197
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Yi - Neon Dream",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Worlds - Worlds Domination",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":199
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Kindred - Happy Hunting",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":200
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Nav - Illaoi - Totem War",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":201
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Link - Ekko - Break Time",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":202
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Link - Champion Pool",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":203
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Link - Riven - Pixel Perfect",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":204
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Link - Yi - Neon Dream",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":205
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Link - Kindred - Happy Hunting",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":206
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Click actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Link - Illaoi - Totem War",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":207
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Warsongs Album",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":214
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Warsongs Album",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":215
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Screensaver-Download-Mac",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-68378611-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":259
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Screensaver-Download-Win",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-68378611-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":260
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Battlegrounds",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Pageview",
      "vtp_eventLabel":"Extra pageviews",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":279
    },{
      "function":"__sp",
      "vtp_conversionId":"922382196",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":296
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"NPL - New Dawn Play",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","5","dimension",["macro",21]],["map","index","6","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":301
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"NPL - Twitter Click",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","5","dimension",["macro",21]],["map","index","6","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":302
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"NPL - Facebook Click",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","5","dimension",["macro",21]],["map","index","6","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":303
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Click Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"uLoL Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":304
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":311
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":312
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",26],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":313
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":314
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":321
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieName","value","lol_ua_cookie"],["map","fieldName","cookieDomain","value","leagueoflegends.com"],["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",13],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":322
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"448334",
      "tag_id":348
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1032904195",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"mDWmCP3km3AQg7zD7AM",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":350
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Universe - Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Fan Art Click",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","5","dimension",["macro",21]],["map","index","6","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":372
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949861468",
      "vtp_conversionLabel":"f4DOCID6r3MQ3Pj2xAM",
      "vtp_url":["macro",14],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":376
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949861468",
      "vtp_conversionLabel":"ZcF_CMPVnXMQ3Pj2xAM",
      "vtp_url":["macro",14],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":377
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":382
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",35],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",36],
      "vtp_eventAction":["macro",37],
      "vtp_eventLabel":["macro",38],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":393
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"lolco0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"lolsi0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8663141",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":395
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":396
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":397
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":398
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"lolco0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"leagu0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8663141",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":399
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":401
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949861468",
      "vtp_conversionLabel":"sbd7CM695HsQ3Pj2xAM",
      "vtp_url":["macro",14],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":402
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":405
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":406
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":407
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":408
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":409
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":410
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":411
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":412
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":413
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"lolco0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"lolna0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8663141",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":414
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",36],
      "vtp_eventAction":["macro",42],
      "vtp_eventLabel":"lolbar",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":416
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Actions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"JP - 1min video",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","userId","value",["macro",20]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","5","dimension",["macro",21]],["map","index","6","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-5859958-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":419
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":420
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",43],
      "vtp_conversionId":"797435401",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_conversionLabel":"GUFYCKSd64UBEInMn_wC",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":427
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"794690003",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"CT06COip64YBENOD-PoC",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":429
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"797435401",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":439
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":444
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/secure.adnxs.com\/px?id=1022399\u0026t=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",23],
      "tag_id":446
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"794690003",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"A5kMCLia4YcBENOD-PoC",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":451
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"797435401",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"Zxf7CKXq-IcBEInMn_wC",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",14],
      "tag_id":453
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":460
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":471
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"invmedia",
      "vtp_useImageTag":false,
      "vtp_activityTag":"zukknsk9",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8892934",
      "vtp_ordinalStandard":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":473
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"invmedia",
      "vtp_useImageTag":false,
      "vtp_activityTag":"r9qtft8k",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8892934",
      "vtp_ordinalStandard":["macro",23],
      "vtp_url":["macro",14],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":474
    },{
      "function":"__cl",
      "tag_id":476
    },{
      "function":"__cl",
      "tag_id":477
    },{
      "function":"__cl",
      "tag_id":478
    },{
      "function":"__cl",
      "tag_id":479
    },{
      "function":"__cl",
      "tag_id":480
    },{
      "function":"__cl",
      "tag_id":481
    },{
      "function":"__cl",
      "tag_id":482
    },{
      "function":"__cl",
      "tag_id":483
    },{
      "function":"__cl",
      "tag_id":484
    },{
      "function":"__cl",
      "tag_id":485
    },{
      "function":"__cl",
      "tag_id":486
    },{
      "function":"__cl",
      "tag_id":487
    },{
      "function":"__cl",
      "tag_id":488
    },{
      "function":"__cl",
      "tag_id":489
    },{
      "function":"__cl",
      "tag_id":490
    },{
      "function":"__cl",
      "tag_id":491
    },{
      "function":"__cl",
      "tag_id":492
    },{
      "function":"__cl",
      "tag_id":493
    },{
      "function":"__cl",
      "tag_id":494
    },{
      "function":"__cl",
      "tag_id":495
    },{
      "function":"__cl",
      "tag_id":496
    },{
      "function":"__cl",
      "tag_id":497
    },{
      "function":"__cl",
      "tag_id":498
    },{
      "function":"__cl",
      "tag_id":499
    },{
      "function":"__cl",
      "tag_id":500
    },{
      "function":"__cl",
      "tag_id":501
    },{
      "function":"__cl",
      "tag_id":502
    },{
      "function":"__cl",
      "tag_id":503
    },{
      "function":"__cl",
      "tag_id":504
    },{
      "function":"__cl",
      "tag_id":505
    },{
      "function":"__cl",
      "tag_id":506
    },{
      "function":"__cl",
      "tag_id":507
    },{
      "function":"__cl",
      "tag_id":508
    },{
      "function":"__cl",
      "tag_id":509
    },{
      "function":"__cl",
      "tag_id":510
    },{
      "function":"__cl",
      "tag_id":511
    },{
      "function":"__cl",
      "tag_id":512
    },{
      "function":"__cl",
      "tag_id":513
    },{
      "function":"__cl",
      "tag_id":514
    },{
      "function":"__cl",
      "tag_id":515
    },{
      "function":"__cl",
      "tag_id":516
    },{
      "function":"__cl",
      "tag_id":517
    },{
      "function":"__cl",
      "tag_id":518
    },{
      "function":"__cl",
      "tag_id":519
    },{
      "function":"__cl",
      "tag_id":520
    },{
      "function":"__cl",
      "tag_id":521
    },{
      "function":"__cl",
      "tag_id":522
    },{
      "function":"__cl",
      "tag_id":523
    },{
      "function":"__cl",
      "tag_id":524
    },{
      "function":"__cl",
      "tag_id":525
    },{
      "function":"__cl",
      "tag_id":526
    },{
      "function":"__cl",
      "tag_id":527
    },{
      "function":"__cl",
      "tag_id":528
    },{
      "function":"__cl",
      "tag_id":529
    },{
      "function":"__cl",
      "tag_id":530
    },{
      "function":"__cl",
      "tag_id":531
    },{
      "function":"__cl",
      "tag_id":532
    },{
      "function":"__cl",
      "tag_id":533
    },{
      "function":"__cl",
      "tag_id":534
    },{
      "function":"__cl",
      "tag_id":535
    },{
      "function":"__cl",
      "tag_id":536
    },{
      "function":"__cl",
      "tag_id":537
    },{
      "function":"__cl",
      "tag_id":538
    },{
      "function":"__cl",
      "tag_id":539
    },{
      "function":"__cl",
      "tag_id":540
    },{
      "function":"__cl",
      "tag_id":541
    },{
      "function":"__cl",
      "tag_id":542
    },{
      "function":"__cl",
      "tag_id":543
    },{
      "function":"__cl",
      "tag_id":544
    },{
      "function":"__cl",
      "tag_id":545
    },{
      "function":"__cl",
      "tag_id":546
    },{
      "function":"__cl",
      "tag_id":547
    },{
      "function":"__cl",
      "tag_id":548
    },{
      "function":"__cl",
      "tag_id":549
    },{
      "function":"__cl",
      "tag_id":550
    },{
      "function":"__cl",
      "tag_id":551
    },{
      "function":"__cl",
      "tag_id":552
    },{
      "function":"__cl",
      "tag_id":553
    },{
      "function":"__cl",
      "tag_id":554
    },{
      "function":"__cl",
      "tag_id":555
    },{
      "function":"__cl",
      "tag_id":556
    },{
      "function":"__cl",
      "tag_id":557
    },{
      "function":"__cl",
      "tag_id":558
    },{
      "function":"__cl",
      "tag_id":559
    },{
      "function":"__cl",
      "tag_id":560
    },{
      "function":"__cl",
      "tag_id":561
    },{
      "function":"__cl",
      "tag_id":562
    },{
      "function":"__cl",
      "tag_id":563
    },{
      "function":"__cl",
      "tag_id":564
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"59448_312",
      "tag_id":565
    },{
      "function":"__cl",
      "tag_id":566
    },{
      "function":"__cl",
      "tag_id":567
    },{
      "function":"__cl",
      "tag_id":568
    },{
      "function":"__cl",
      "tag_id":569
    },{
      "function":"__cl",
      "tag_id":570
    },{
      "function":"__cl",
      "tag_id":571
    },{
      "function":"__cl",
      "tag_id":572
    },{
      "function":"__cl",
      "tag_id":573
    },{
      "function":"__cl",
      "tag_id":574
    },{
      "function":"__cl",
      "tag_id":575
    },{
      "function":"__cl",
      "tag_id":576
    },{
      "function":"__cl",
      "tag_id":577
    },{
      "function":"__cl",
      "tag_id":578
    },{
      "function":"__cl",
      "tag_id":579
    },{
      "function":"__cl",
      "tag_id":580
    },{
      "function":"__cl",
      "tag_id":581
    },{
      "function":"__cl",
      "tag_id":582
    },{
      "function":"__cl",
      "tag_id":583
    },{
      "function":"__cl",
      "tag_id":584
    },{
      "function":"__cl",
      "tag_id":585
    },{
      "function":"__cl",
      "tag_id":586
    },{
      "function":"__cl",
      "tag_id":587
    },{
      "function":"__cl",
      "tag_id":588
    },{
      "function":"__cl",
      "tag_id":589
    },{
      "function":"__cl",
      "tag_id":590
    },{
      "function":"__cl",
      "tag_id":591
    },{
      "function":"__cl",
      "tag_id":592
    },{
      "function":"__cl",
      "tag_id":593
    },{
      "function":"__cl",
      "tag_id":594
    },{
      "function":"__cl",
      "tag_id":595
    },{
      "function":"__cl",
      "tag_id":596
    },{
      "function":"__cl",
      "tag_id":597
    },{
      "function":"__cl",
      "tag_id":598
    },{
      "function":"__cl",
      "tag_id":599
    },{
      "function":"__cl",
      "tag_id":600
    },{
      "function":"__cl",
      "tag_id":601
    },{
      "function":"__cl",
      "tag_id":602
    },{
      "function":"__cl",
      "tag_id":603
    },{
      "function":"__cl",
      "tag_id":604
    },{
      "function":"__cl",
      "tag_id":605
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"59448_672",
      "tag_id":606
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"59448_676",
      "tag_id":607
    },{
      "function":"__cl",
      "tag_id":608
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25, 50, 75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":false,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"59448_678",
      "tag_id":609
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter23404294=new Ya.Metrika({id:23404294,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(f){}});var e=d.getElementsByTagName(\"script\")[0],c=d.createElement(\"script\");a=function(){e.parentNode.insertBefore(c,e)};c.type=\"text\/javascript\";c.async=!0;c.src=\"https:\/\/mc.yandex.ru\/metrika\/watch.js\";\"[object Opera]\"==b.opera?d.addEventListener(\"DOMContentLoaded\",a,!1):a()})(document,window,\"yandex_metrika_callbacks\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/23404294\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "vtp_html":"\u003Cstyle\u003E\nbody {\n    -webkit-animation-duration: 0.1s;\n\t-webkit-animation-name: fontfix;\n\t-webkit-animation-iteration-count: 10;\n\t-webkit-animation-timing-function: linear;\n\t-webkit-animation-delay: 0.5s;\n}\n\n@-webkit-keyframes fontfix{\n\tfrom{ \topacity: 1; }\n\tto{\topacity: 1; }\n}\n\u003C\/style\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/lolstatic-a.akamaihd.net\/ping_telemetry\/latest\/wpp.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\":\"http:\/\/schema.org\",\n  \"@type\":\"VideoGame\",\n  \"name\":[\n    {\n      \"@language\":\"en\",\n      \"@value\":\"League of Legends\"\n    },\n  ],\n  \"url\":\"http:\/\/leagueoflegends.com\",\n  \"sameAs\": [\n  \"http:\/\/en.wikipedia.org\/wiki\/League_of_Legends\",\n  \"https:\/\/www.youtube.com\/user\/RiotGamesInc\"\n  ],\n  \"description\":[\n    {\n      \"@language\":\"en\",\n      \"@value\":\"Recently recognized as the most played video game in the world—67 million play every month—League of Legends® is a multiplayer online battle arena game (MOBA). Players choose a role from an expanding cast of powerful champions and join forces in strategic, fast-paced gameplay to take control of the enemy’s end of the battlefield.\"\n    },\n  ],\n  \"genre\":[\n    \"Multiplayer online battle arena\",\n    \"Action real time strategy\"\n    \"Massively multiplayer online\"\n  ],\n  \"contributor\":[\n    {\n      \"@type\":\"Role\",\n      \"roleName\":\"developer\",\n      \"contributor\":{\n        \"@type\":\"Organization\",\n        \"name\":\"Riot Games\",\n        \"sameAs\":\"www.riotgames.com\"\n      }\n    }\n  ],\n  \"publisher\":{\n    \"@type\":\"Organization\",\n    \"name\":\"Riot Games\",\n    \"sameAs\":\"www.riotgames.com\"\n  },\n  \"image\":\"http:\/\/news.cdn.leagueoflegends.com\/public\/images\/misc\/GameBox.jpg\",\n  \"screenshot\":\"http:\/\/news.cdn.leagueoflegends.com\/public\/images\/misc\/Background.jpg\",\n  \"trailer\":{\n    \"@type\":\"VideoObject\",\n    \"url\":\"https:\/\/www.youtube.com\/watch?v=vzHrjOMfHPY\",\n    \"inLanguage\":\"en\"\n  },\n  \"exampleOfWork\":[\n    {\n      \"@type\":\"VideoGame\",\n      \"gamePlatform\":[\n        \"http:\/\/en.wikipedia.org\/wiki\/Microsoft_Windows\",\n        \"http:\/\/en.wikipedia.org\/wiki\/OS_X\"\n      ],\n      \"contentRating\":\"ESRB T\",\n      \"releasedEvent\":{\n        \"@type\":\"PublicationEvent\",\n        \"startDate\":\"2009-10-27\",\n        }\n      }\n    },\n\n      }\n    }\n  ]\n}\n\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/cdn.optimizely.com\/js\/3588462670.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push(\"activateUniversalAnalytics\");\u003C\/script\u003E",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction trackScroll(e){function g(a,d,b){a.addEventListener?a.addEventListener(d,b):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+d,b)}function h(){for(var a=0,d=e.length;a\u003Cd;a++){var b=document.documentElement;b=self.pageYOffset||b\u0026\u0026b.scrollTop||document.body.scrollTop;var c=document.documentElement;c=self.innerHeight||c\u0026\u0026c.clientHeight||document.body.clientHeight;b=(b+c)\/document.body.scrollHeight*100;c=e[a]+\"%\";0\u003Ef.indexOf(c)\u0026\u0026b\u003Ee[a]\u0026\u0026(f.push(c),analyticsEvent(\"interaction\",\"page-scroll\",c))}}var f=[];g(window,\n\"scroll\",h)}trackScroll([10,50,90]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EanalyticsEvent=function(b,a,c,d,e){dataLayer.push({event:\"analyticsEvent\",eventCategory:b,eventAction:a,eventLabel:c,eventValue:d,eventNonInt:e})};analyticsSocial=function(b,a,c,d){dataLayer.push({event:\"social\",socialNetwork:b,socialAction:a,socialTarget:c,socialPagePath:d})};analyticsVPV=function(b){dataLayer.push({event:\"analyticsVPV\",vpvName:b})};analyticsClearVPV=function(){dataLayer.push({event:\"analyticsVPV\",vpvName:void 0})};\nanalyticsForm=function(b,a){var c=b,d=a.name||a.id||a.type,e=\"interaction\";c=\"form: \"+c;d=d+\":\"+a.type;analyticsEvent(e,c,d)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"google-site-verification\" content=\"ZzkTbFxpSI_jV6Lkbfa_1x68gekqbk_V-aUqDedvnkk\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=\/^persist(Save|Replace)\/,f=(new Date).getTime();var a=18E5;if(\"undefined\"!==typeof Storage){var b=localStorage.getItem(\"persistDL\");var c=localStorage.getItem(\"persistTime\");switch(",["escape",["macro",31],8,16],"){case \"gtm.js\":b\u0026\u0026c\u0026\u0026(a\u0026\u0026f\u003ENumber(c)+a?localStorage.removeItem(\"persistDL\"):b\u0026\u0026dataLayer.push(JSON.parse(b)));break;case \"persistDelete\":localStorage.removeItem(\"persistDL\");break;case \"persistReplace\":b=null;case \"persistSave\":for(var d=0;d\u003CdataLayer.length;d++)if(g.test(dataLayer[d].event)){a=\ndataLayer[d];delete a.event;c=JSON.parse(b)||{};for(var e in a)a.hasOwnProperty(e)\u0026\u0026(c[e]=a[e]);localStorage.setItem(\"persistDL\",JSON.stringify(c))}}localStorage.setItem(\"persistTime\",JSON.stringify(f))}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"108733672846499\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=108733672846499\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":224
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Chead\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1006077939403331\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1006077939403331\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003C\/head\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1006077939403331\");fbq(\"track\",\"PageView\");fbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1006077939403331\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter34687290=new Ya.Metrika({id:34687290,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})}catch(f){}});var e=d.getElementsByTagName(\"script\")[0],c=d.createElement(\"script\");a=function(){e.parentNode.insertBefore(c,e)};c.type=\"text\/javascript\";c.async=!0;c.src=\"https:\/\/mc.yandex.ru\/metrika\/watch.js\";\"[object Opera]\"==b.opera?d.addEventListener(\"DOMContentLoaded\",a,!1):a()})(document,window,\"yandex_metrika_callbacks\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/34687290\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"}var signupId=getCookie(\"SIGNUP_USER_ID\");\"\"!=signupId\u0026\u0026dataLayer.push({userId:signupId});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":264
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(c,d,a){var b=new Date;b.setTime(b.getTime()+864E5*a);a=\"expires\\x3d\"+b.toUTCString();document.cookie=c+\"\\x3d\"+d+\"; \"+a}\"undefined\"!==typeof pvpnet_id\u0026\u0026\"\"!==pvpnet_id\u0026\u0026setCookie(\"SIGNUP_USER_ID\",String(pvpnet_id)+\";domain\\x3d.leagueoflegends.com;path\\x3d\/\",365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":265
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar __nspid=\"3e0dts\",__nsptags=[];(function(a,b){var c=function(){var a=b.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"http\"+(\"https:\"===b.location.protocol?\"s:\/\/cs\":\":\/\/c\")+\".ns1p.net\/p.js?a\\x3d\"+__nspid;b.body.appendChild(a)};a.addEventListener?a.addEventListener(\"load\",c,!1):a.attachEvent?a.attachEvent(\"onload\",c):a.onload=c})(window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":277
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(c){c+=\"\\x3d\";for(var d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){for(var a=d[b];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"\"}function setCookie(c,d,b){var a=new Date;a.setTime(a.getTime()+864E5*b);b=\"expires\\x3d\"+a.toUTCString();document.cookie=c+\"\\x3d\"+d+\"; \"+b}var playSplashCount=0,playSplashCountCookie=getCookie(\"play_splash_count\");\nplaySplashCountCookie\u0026\u0026(playSplashCount=parseInt(playSplashCountCookie,10),isNaN(playSplashCount)\u0026\u0026(playSplashCount=0));0\u003E=playSplashCount\u0026\u0026(playSplashCount+=1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/s3.amazonaws.com\/ki.js\/51398\/aVk.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" charset=\"utf-8\"\u003E_kiq.push([\"identify\",window.pvpnet_id||\"null\"]);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" charset=\"utf-8\"\u003Evar accountData=function(){try{var b=window.localStorage.getItem(\"signup\");if(b){var a=JSON.parse(b);a.expires\u0026\u0026(new Date).getTime()\u003Ea.expires\u0026\u0026(a=null)}}catch(c){a=null}return a}();accountData?_kiq.push([\"account_id\",accountData.id]):_kiq.push([\"account_id\",\"null\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":300
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(window.Image?new Image:document.createElement(\"img\")).src=location.protocol+\"\/\/vk.com\/rtrg?r\\x3dgx2PAWYDaPUsDjbvOE3lJgNkmEkHivUAvEeto7CdAB14udUgcTpp0UM*dErvVwE3vRWR*WSiWVCk0dpf2SfdTUcAAlNSV5XbWiJ96J8PTRaPUPjTa*dn3MHHYpWQo9AtRq05GM9hmh4BW\/MrZxtsDwBXnteV1xkIfomlyXepdOs-\\x26pixel_id\\x3d1000043953\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":315
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(window.Image?new Image:document.createElement(\"img\")).src=location.protocol+\"\/\/vk.com\/rtrg?r\\x3dC*rf8QnHAjXISh74rg2EztWwGAMnWaTWgCFW\/W31VIjirhPGszGNzz46MDsIjm0vm1mwKk3E4*SQNnTwG5DUXOKkDoEIdOokKRG3pm0XjtbiSad9Nyk7l0vA7LxM8Af1s9Pw6q8*Gq2NXDAlRl\/uez9\/h*p9Vahpe5Vj*HdOnps-\\x26pixel_id\\x3d1000048616\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":316
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1333159730080479\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1333159730080479\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:\"2839679\",type:\"pageView\",start:(new Date).getTime()});(function(b,d,a){if(!b.getElementById(a)){var c=b.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.id=a;c.src=(\"https:\"==b.location.protocol?\"https:\":\"http:\")+\"\/\/top-fwz1.mail.ru\/js\/code.js\";a=function(){var a=b.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(c,a)};\"[object Opera]\"==d.opera?b.addEventListener(\"DOMContentLoaded\",a,!1):a()}})(document,window,\"topmailru-code\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cdiv style=\"position:absolute;left:-10000px;\"\u003E\n\u003Cimg src=\"\/\/top-fwz1.mail.ru\/counter?id=2839679;js=na\" style=\"border:0;\" height=\"1\" width=\"1\" alt=\"Рейтинг@Mail.ru\"\u003E\n\u003C\/div\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":318
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var d=function(){var a={};if(\"chrome\"in b\u0026\u0026\"function\"===typeof b.chrome.loadTimes)a=b.chrome.loadTimes(),a={duration:Math.round(1E3*(a.firstPaintTime-a.startLoadTime)),source:\"chromeLoadTimes\"},6E4\u003Ca.duration\u0026\u0026(a={});else if(\"performance\"in b){var c=b.performance.timing;0\u003Cc.navigationStart\u0026\u0026(a={duration:c.msFirstPaint-c.navigationStart,source:\"msFirstPaint\"})}a\u0026\u0026\"number\"===typeof a.duration\u0026\u00260\u003Ca.duration\u0026\u0026b.ga\u0026\u0026\"function\"===typeof b.ga\u0026\u0026(a={hitType:\"timing\",timingCategory:\"RUM\",timingVar:\"First Paint (ms)\",\ntimingValue:a.duration,timingLabel:a.source},b.navigator.sendBeacon\u0026\u0026\"function\"===typeof b.navigator.sendBeacon\u0026\u0026(a.transport=\"beacon\"),b.ga(\"send\",a))};\"complete\"===document.readyState?d():b.addEventListener(\"load\",d)})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":323
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"613770612154492\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=613770612154492\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":358
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",248,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Registration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":359
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",248,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"NewPlayerRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":360
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"nxr0d\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nxr0d\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nxr0d\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":364
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"nxqp1\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nxqp1\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nxqp1\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":374
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"nxr8o\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nxr8o\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nxr8o\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":375
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){c._admitadPixel={response_type:\"img\",action_code:\"1\",campaign_code:\"017bb1847a\"};c._admitadPositions=c._admitadPositions||[];c._admitadPositions.push({uid:\"",["escape",["macro",43],7],"\",tariff_code:\"1\",order_id:\"\",payment_type:\"lead\"});var a=\"_admitad-pixel\";if(!b.getElementById(a)){var d=b.createElement(\"script\");d.id=a;a=(new Date).getTime();var e=\"https:\"===b.location.protocol?\"https:\":\"http:\";d.src=e+\"\/\/cdn.asbmit.com\/static\/js\/npixel.js?r\\x3d\"+a;a=b.getElementsByTagName(\"head\")[0];a.appendChild(d)}})(document,\nwindow);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":389
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,a){if(a){var b=new Date;b.setTime(b.getTime()+864E5*a);a=\"; expires\\x3d\"+b.toGMTString()}else a=\"\";document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/; domain\\x3d.ru.leagueoflegends.com\"}createCookie(\"AdmitadUID\",\"",["escape",["macro",45],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":390
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",248,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Re-Download\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":391
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nzrh1\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nzrh1\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nzrh1\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":400
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\n\n\n\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-8717890\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-8717890\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":403
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-8717890\/count01\/001re0+unique\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=8717890;type=count01;cat=001re0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":404
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzv5v\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":415
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\n\n\n\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-8717890\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-8717890\");\u003C\/script\u003E\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-8717890\/count01\/002si0+unique\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=8717890;type=count01;cat=002si0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":417
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nzvqc\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nzvqc\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nzvqc\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":421
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"264193667495797\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=264193667495797\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":422
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/8848965.fls.doubleclick.net\/activityi;src\\x3d8848965;type\\x3dinvmedia;cat\\x3djv1jnodk;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/8848965.fls.doubleclick.net\/activityi;src=8848965;type=invmedia;cat=jv1jnodk;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":423
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:11488,price:0,convtype:90,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":424
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_3b603a76-58c9-a7d7-df13-90fddfdcb8bc\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"aax-fe.amazon-adsystem.com\/s\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D3b603a76-58c9-a7d7-df13-90fddfdcb8bc%26type%3D82%26m%3D6\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/jp.leagueoflegends.com\/ja\/news\/riot-games\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D1914888300503%3Bp%3D3B603A76-58C9-A7D7-DF13-90FDDFDCB8BC\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_3b603a76-58c9-a7d7-df13-90fddfdcb8bc\");\ndocument.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D3b603a76-58c9-a7d7-df13-90fddfdcb8bc%26type%3D82%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/jp.leagueoflegends.com\/ja\/news\/riot-games\u0026amp;ex-hargs=v%3D1.0%3Bc%3D1914888300503%3Bp%3D3B603A76-58C9-A7D7-DF13-90FDDFDCB8BC\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":425
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.conv\u0026\u0026(_fout_queue.conv={});void 0===_fout_queue.conv.queue\u0026\u0026(_fout_queue.conv.queue=[]);_fout_queue.conv.queue.push({user_id:28434,convtype:0,price:0,dat:\"\"});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":426
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003Evar yahoo_ydn_conv_io=\"GqJnClsOLDWYfqc10kTV\",yahoo_ydn_conv_label=\"8UYKFXBQQBLXDIT2M9Z490935\",yahoo_ydn_conv_transaction_id=\"\",yahoo_ydn_conv_value=\"0\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\" charset=\"UTF-8\" data-gtmsrc=\"https:\/\/b90.yahoo.co.jp\/conv.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":428
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar yahoo_conversion_id=1001019834,yahoo_conversion_label=\"3wb4CNLl54YBELPE9voC\",yahoo_conversion_value=0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cdiv style=\"display:inline;\"\u003E\n        \u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/b91.yahoo.co.jp\/pagead\/conversion\/1001019834\/?value=0\u0026amp;label=3wb4CNLl54YBELPE9voC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;disvt=true\"\u003E\n    \u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":430
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=1020180\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":431
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-8817032\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-8817032\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":432
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzvqa\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":433
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"264193667495797\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=264193667495797\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":434
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/i.socdm.com\/s\/so_sg.js?sgid=63169\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":435
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:28664,advertiser_id:11488,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":436
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_4474302a-161e-7319-87a2-e4854e329608\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"aax-fe.amazon-adsystem.com\/s\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D4474302a-161e-7319-87a2-e4854e329608%26type%3DUNKNOWN%26m%3D6\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/jp.leagueoflegends.com\/ja\/news\/riot-games\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D1914888300503%3Bp%3D4474302A-161E-7319-87A2-E4854E329608\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_4474302a-161e-7319-87a2-e4854e329608\");\ndocument.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D4474302a-161e-7319-87a2-e4854e329608%26type%3DUNKNOWN%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/jp.leagueoflegends.com\/ja\/news\/riot-games\u0026amp;ex-hargs=v%3D1.0%3Bc%3D1914888300503%3Bp%3D4474302A-161E-7319-87A2-E4854E329608\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":437
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:28434});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":438
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"7CDAQ7NB02\",yahoo_retargeting_label=\"\",yahoo_retargeting_page_type=\"\",yahoo_retargeting_items=[{item_id:\"\",category_id:\"\",price:\"\",quantity:\"\"}];\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\" data-gtmsrc=\"https:\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":440
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar yahoo_ss_retargeting_id=1001019834,yahoo_sstag_custom_params=window.yahoo_sstag_params,yahoo_ss_retargeting=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/b97.yahoo.co.jp\/pagead\/conversion\/1001019834\/?guid=ON\u0026amp;script=0\u0026amp;disvt=false\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":442
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(d,e){var b=\"003bc4ab9044524a91ce6b071e7b6e4d27\";if(d.obApi){var c=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]};d.obApi.marketerId=c(d.obApi.marketerId).concat(c(b))}else{var a=d.obApi=function(){a.dispatch?a.dispatch.apply(a,arguments):a.queue.push(arguments)};a.version=\"1.1\";a.loaded=!0;a.marketerId=b;a.queue=[];b=e.createElement(\"script\");b.async=!0;b.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";b.type=\"text\/javascript\";c=e.getElementsByTagName(\"script\")[0];\nc.parentNode.insertBefore(b,c)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":445
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/694-ct.c3tag.com\/c3metrics-694.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":447
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar yahoo_conversion_id=1001019834,yahoo_conversion_label=\"Vir4CI-h4YcBELPE9voC\",yahoo_conversion_value=0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cdiv style=\"display:inline;\"\u003E\n        \u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/b91.yahoo.co.jp\/pagead\/conversion\/1001019834\/?value=0\u0026amp;label=Vir4CI-h4YcBELPE9voC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;disvt=true\"\u003E\n    \u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":452
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003Evar yahoo_ydn_conv_io=\"GqJnClsOLDWYfqc10kTV\",yahoo_ydn_conv_label=\"14NUFJLSAX9RBRH1S8C506137\",yahoo_ydn_conv_transaction_id=\"\",yahoo_ydn_conv_value=\"0\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\" charset=\"UTF-8\" data-gtmsrc=\"https:\/\/b90.yahoo.co.jp\/conv.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":454
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_3b83886e-3e8d-e270-6c7d-f6ecbbabeb01\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"aax-fe.amazon-adsystem.com\/s\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D3b83886e-3e8d-e270-6c7d-f6ecbbabeb01%26type%3D82%26m%3D6\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/jp.leagueoflegends.com\/ja\/news\/riot-games\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D1914888300503%3Bp%3D3B83886E-3E8D-E270-6C7D-F6ECBBABEB01\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_3b83886e-3e8d-e270-6c7d-f6ecbbabeb01\");\ndocument.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D3b83886e-3e8d-e270-6c7d-f6ecbbabeb01%26type%3D82%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/jp.leagueoflegends.com\/ja\/news\/riot-games\u0026amp;ex-hargs=v%3D1.0%3Bc%3D1914888300503%3Bp%3D3B83886E-3E8D-E270-6C7D-F6ECBBABEB01\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":455
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.conv\u0026\u0026(_fout_queue.conv={});void 0===_fout_queue.conv.queue\u0026\u0026(_fout_queue.conv.queue=[]);_fout_queue.conv.queue.push({user_id:28434,convtype:1,price:0,dat:\"\"});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":457
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/8848965.fls.doubleclick.net\/activityi;src\\x3d8848965;type\\x3dinvmedia;cat\\x3duak4op0f;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/8848965.fls.doubleclick.net\/activityi;src=8848965;type=invmedia;cat=uak4op0f;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":458
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o02m4\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o02m4\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o02m4\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":459
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=1025268\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":461
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"",["escape",["macro",46],14,3],"\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":462
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(d,e){var b=\"003bc4ab9044524a91ce6b071e7b6e4d27\";if(d.obApi){var c=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]};d.obApi.marketerId=c(d.obApi.marketerId).concat(c(b))}else{var a=d.obApi=function(){a.dispatch?a.dispatch.apply(a,arguments):a.queue.push(arguments)};a.version=\"1.1\";a.loaded=!0;a.marketerId=b;a.queue=[];b=e.createElement(\"script\");b.async=!0;b.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";b.type=\"text\/javascript\";c=e.getElementsByTagName(\"script\")[0];\nc.parentNode.insertBefore(b,c)}}(window,document);obApi(\"track\",\"Riot Games event pix\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":463
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-8817032\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-8817032\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":464
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript class=\"kxct\" data-id=\"s6lekx4gg\" data-timing=\"async\" data-version=\"3.0\" type=\"text\/gtmscript\"\u003Ewindow.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"===location.protocol?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag\/s6lekx4gg.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":465
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);Krux(\"ns:riotgamesinc\",\"admEvent\",\"MLeuCHRu\",\"dnld\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":466
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);Krux(\"ns:riotgamesinc\",\"admEvent\",\"MLeuRk6t\",\"registration\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":467
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"",["escape",["macro",47],14,3],"\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":468
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"",["escape",["macro",48],14,3],"\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":469
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"672219266487770\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=672219266487770\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":470
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.NREUM||(NREUM={});\n__nr_require=function(a,f,d){function b(c){if(!f[c]){var e=f[c]={exports:{}};a[c][0].call(e.exports,function(e){var g=a[c][1][e];return b(g||e)},e,e.exports)}return f[c].exports}if(\"function\"==typeof __nr_require)return __nr_require;for(var c=0;c\u003Cd.length;c++)b(d[c]);return b}({1:[function(a,f,d){function b(a){try{c.console\u0026\u0026console.log(a)}catch(g){}}f=a(\"ee\");a=a(15);var c={};try{var k=localStorage.getItem(\"__nr_flags\").split(\",\");console\u0026\u0026\"function\"==typeof console.log\u0026\u0026(c.console=!0,-1!==k.indexOf(\"dev\")\u0026\u0026\n(c.dev=!0),-1!==k.indexOf(\"nr_dev\")\u0026\u0026(c.nrDev=!0))}catch(e){}c.nrDev\u0026\u0026f.on(\"internal-error\",function(a){b(a.stack)});c.dev\u0026\u0026f.on(\"fn-err\",function(a,c,d){b(d.stack)});c.dev\u0026\u0026(b(\"NR AGENT IN DEVELOPMENT MODE\"),b(\"flags: \"+a(c,function(a,c){return a}).join(\", \")))},{}],2:[function(a,f,d){function b(a,b,v,d,f){try{r?--r:k(f||new c(a,b,v),!0)}catch(y){try{e(\"ierr\",[y,h.now(),!0])}catch(x){}}return\"function\"==typeof m\u0026\u0026m.apply(this,g(arguments))}function c(a,c,b){this.message=a||\"Uncaught error with no additional information\";\nthis.sourceURL=c;this.line=b}function k(a,c){var p=c?null:h.now();e(\"err\",[a,p])}var e=a(\"handle\"),g=a(16);f=a(\"ee\");var h=a(\"loader\"),l=a(\"gos\"),m=window.onerror,n=!1,q=\"nr@seenError\",r=0;h.features.err=!0;a(1);window.onerror=b;try{throw Error();}catch(p){\"stack\"in p\u0026\u0026(a(8),a(7),\"addEventListener\"in window\u0026\u0026a(5),h.xhrWrappable\u0026\u0026a(9),n=!0)}f.on(\"fn-start\",function(a,c,b){n\u0026\u0026(r+=1)});f.on(\"fn-err\",function(a,c,b){n\u0026\u0026!b[q]\u0026\u0026(l(b,q,function(){return!0}),this.thrown=!0,k(b))});f.on(\"fn-end\",function(){n\u0026\u0026\n!this.thrown\u0026\u00260\u003Cr\u0026\u0026--r});f.on(\"internal-error\",function(a){e(\"ierr\",[a,h.now(),!0])})},{}],3:[function(a,f,d){a(\"loader\").features.ins=!0},{}],4:[function(a,f,d){function b(a){}if(window.performance\u0026\u0026window.performance.timing\u0026\u0026window.performance.getEntriesByType){f=a(\"ee\");var c=a(\"handle\");d=a(8);var k=a(7),e=\"learResourceTimings\",g=\"addEventListener\",h=\"resourcetimingbufferfull\",l=\"bstResource\",m=\"resource\",n=\"-start\",q=\"-end\",r=\"fn\"+n,p=\"fn\"+q,w=\"bstTimer\",v=\"pushState\",t=a(\"loader\");t.features.stn=\n!0;a(6);var u=NREUM.o.EV;f.on(r,function(a,c){var b=a[0];b instanceof u\u0026\u0026(this.bstStart=t.now())});f.on(p,function(a,b){var p=a[0];p instanceof u\u0026\u0026c(\"bst\",[p,b,this.bstStart,t.now()])});d.on(r,function(a,c,b){this.bstStart=t.now();this.bstType=b});d.on(p,function(a,b){c(w,[b,this.bstStart,t.now(),this.bstType])});k.on(r,function(){this.bstStart=t.now()});k.on(p,function(a,b){c(w,[b,this.bstStart,t.now(),\"requestAnimationFrame\"])});f.on(v+n,function(a){this.time=t.now();this.startPath=location.pathname+\nlocation.hash});f.on(v+q,function(a){c(\"bstHist\",[location.pathname+location.hash,this.startPath,this.time])});g in window.performance\u0026\u0026(window.performance[\"c\"+e]?window.performance[g](h,function(a){c(l,[window.performance.getEntriesByType(m)]);window.performance[\"c\"+e]()},!1):window.performance[g](\"webkit\"+h,function(a){c(l,[window.performance.getEntriesByType(m)]);window.performance[\"webkitC\"+e]()},!1));document[g](\"scroll\",b,{passive:!0});document[g](\"keypress\",b,!1);document[g](\"click\",b,!1)}},\n{}],5:[function(a,f,d){function b(a){for(;a\u0026\u0026!a.hasOwnProperty(h);)a=Object.getPrototypeOf(a);a\u0026\u0026c(a)}function c(a){e.inPlace(a,[h,l],\"-\",k)}function k(a,c){return a[1]}d=a(\"ee\").get(\"events\");var e=a(18)(d,!0),g=a(\"gos\");a=XMLHttpRequest;var h=\"addEventListener\",l=\"removeEventListener\";f.exports=d;\"getPrototypeOf\"in Object?(b(document),b(window),b(a.prototype)):a.prototype.hasOwnProperty(h)\u0026\u0026(c(window),c(a.prototype));d.on(h+\"-start\",function(a,c){var b=a[1],d=g(b,\"nr@wrapped\",function(){function a(){if(\"function\"==\ntypeof b.handleEvent)return b.handleEvent.apply(b,arguments)}var c={object:a,\"function\":b}[typeof b];return c?e(c,\"fn-\",null,c.name||\"anonymous\"):b});this.wrapped=a[1]=d});d.on(l+\"-start\",function(a){a[1]=this.wrapped||a[1]})},{}],6:[function(a,f,d){d=a(\"ee\").get(\"history\");a=a(18)(d);f.exports=d;a.inPlace(window.history,[\"pushState\",\"replaceState\"],\"-\")},{}],7:[function(a,f,d){d=a(\"ee\").get(\"raf\");var b=a(18)(d);a=\"equestAnimationFrame\";f.exports=d;b.inPlace(window,[\"r\"+a,\"mozR\"+a,\"webkitR\"+a,\"msR\"+\na],\"raf-\");d.on(\"raf-start\",function(a){a[0]=b(a[0],\"fn-\")})},{}],8:[function(a,f,d){function b(a,b,c){a[0]=k(a[0],\"fn-\",null,c)}function c(a,b,c){this.method=c;this.timerDuration=isNaN(a[1])?0:+a[1];a[0]=k(a[0],\"fn-\",this,c)}d=a(\"ee\").get(\"timer\");var k=a(18)(d);a=\"setTimeout\";var e=\"setInterval\",g=\"clearTimeout\",h=\"-start\",l=\"-\";f.exports=d;k.inPlace(window,[a,\"setImmediate\"],a+l);k.inPlace(window,[e],e+l);k.inPlace(window,[g,\"clearImmediate\"],g+l);d.on(e+h,b);d.on(a+h,c)},{}],9:[function(a,f,d){function b(a,\nb){l.inPlace(b,[\"onreadystatechange\"],\"fn-\",e)}function c(){var a=this,b=h.context(a);3\u003Ca.readyState\u0026\u0026!b.resolved\u0026\u0026(b.resolved=!0,h.emit(\"xhr-resolved\",[],a));l.inPlace(a,w,\"fn-\",e)}function k(){for(var a=0;a\u003Cv.length;a++)b([],v[a]);v.length\u0026\u0026(v=[])}function e(a,b){return b}function g(a,b){for(var c in a)b[c]=a[c];return b}a(5);d=a(\"ee\");var h=d.get(\"xhr\"),l=a(18)(h),m=NREUM.o,n=m.XHR,q=m.MO;a=m.PR;var r=m.SI,p=\"readystatechange\",w=\"onload onerror onabort onloadstart onloadend onprogress ontimeout\".split(\" \"),\nv=[];f.exports=h;f=window.XMLHttpRequest=function(a){a=new n(a);try{h.emit(\"new-xhr\",[a],a),a.addEventListener(p,c,!1)}catch(z){try{h.emit(\"internal-error\",[z])}catch(B){}}return a};if(g(n,f),f.prototype=n.prototype,l.inPlace(f.prototype,[\"open\",\"send\"],\"-xhr-\",e),h.on(\"send-xhr-start\",function(a,c){b(a,c);v.push(c);q\u0026\u0026(t?t.then(k):r?r(k):(u=-u,y.data=u))}),h.on(\"open-xhr-start\",b),q){var t=a\u0026\u0026a.resolve();if(!r\u0026\u0026!a){var u=1,y=document.createTextNode(u);(new q(k)).observe(y,{characterData:!0})}}else d.on(\"fn-end\",\nfunction(a){a[0]\u0026\u0026a[0].type===p||k()})},{}],10:[function(a,f,d){function b(a){var b=this.params,e=this.metrics;if(!this.ended){this.ended=!0;for(var d=0;d\u003Cl;d++)a.removeEventListener(h[d],this.listener,!1);if(!b.aborted){if(e.duration=c.now()-this.startTime,4===a.readyState){b.status=a.status;d=this.lastSize;var p=a.responseType;if(\"json\"!==p||null===d)d=\"arraybuffer\"===p||\"blob\"===p||\"json\"===p?a.response:a.responseText,d=q(d);(d\u0026\u0026(e.rxSize=d),this.sameOrigin)\u0026\u0026(d=a.getResponseHeader(\"X-NewRelic-App-Data\"))\u0026\u0026\n(b.cat=d.split(\", \").pop())}else b.status=0;e.cbTime=this.cbTime;g.emit(\"xhr-done\",[a],a);k(\"xhr\",[b,e,this.startTime])}}}var c=a(\"loader\");if(c.xhrWrappable){var k=a(\"handle\"),e=a(11),g=a(\"ee\"),h=[\"load\",\"error\",\"abort\",\"timeout\"],l=h.length,m=a(\"id\"),n=a(14),q=a(13),r=window.XMLHttpRequest;c.features.xhr=!0;a(9);g.on(\"new-xhr\",function(a){var c=this;c.totalCbs=0;c.called=0;c.cbTime=0;c.end=b;c.ended=!1;c.xhrGuids={};c.lastSize=null;n\u0026\u0026(34\u003Cn||10\u003En)||window.opera||a.addEventListener(\"progress\",function(a){c.lastSize=\na.loaded},!1)});g.on(\"open-xhr-start\",function(a){this.params={method:a[0]};a=e(a[1]);var b=this.params;b.host=a.hostname+\":\"+a.port;b.pathname=a.pathname;this.sameOrigin=a.sameOrigin;this.metrics={}});g.on(\"open-xhr-end\",function(a,b){\"loader_config\"in NREUM\u0026\u0026\"xpid\"in NREUM.loader_config\u0026\u0026this.sameOrigin\u0026\u0026b.setRequestHeader(\"X-NewRelic-ID\",NREUM.loader_config.xpid)});g.on(\"send-xhr-start\",function(a,b){var d=this.metrics,e=a[0],f=this;d\u0026\u0026e\u0026\u0026(e=q(e))\u0026\u0026(d.txSize=e);this.startTime=c.now();this.listener=\nfunction(a){try{\"abort\"===a.type\u0026\u0026(f.params.aborted=!0),(\"load\"!==a.type||f.called===f.totalCbs\u0026\u0026(f.onloadCalled||\"function\"!=typeof b.onload))\u0026\u0026f.end(b)}catch(x){try{g.emit(\"internal-error\",[x])}catch(z){}}};for(d=0;d\u003Cl;d++)b.addEventListener(h[d],this.listener,!1)});g.on(\"xhr-cb-time\",function(a,b,c){this.cbTime+=a;b?this.onloadCalled=!0:this.called+=1;this.called!==this.totalCbs||!this.onloadCalled\u0026\u0026\"function\"==typeof c.onload||this.end(c)});g.on(\"xhr-load-added\",function(a,b){var c=\"\"+m(a)+!!b;\nthis.xhrGuids\u0026\u0026!this.xhrGuids[c]\u0026\u0026(this.xhrGuids[c]=!0,this.totalCbs+=1)});g.on(\"xhr-load-removed\",function(a,b){var c=\"\"+m(a)+!!b;this.xhrGuids\u0026\u0026this.xhrGuids[c]\u0026\u0026(delete this.xhrGuids[c],--this.totalCbs)});g.on(\"addEventListener-end\",function(a,b){b instanceof r\u0026\u0026\"load\"===a[0]\u0026\u0026g.emit(\"xhr-load-added\",[a[1],a[2]],b)});g.on(\"removeEventListener-end\",function(a,b){b instanceof r\u0026\u0026\"load\"===a[0]\u0026\u0026g.emit(\"xhr-load-removed\",[a[1],a[2]],b)});g.on(\"fn-start\",function(a,b,d){b instanceof r\u0026\u0026(\"onload\"===\nd\u0026\u0026(this.onload=!0),(\"load\"===(a[0]\u0026\u0026a[0].type)||this.onload)\u0026\u0026(this.xhrCbStart=c.now()))});g.on(\"fn-end\",function(a,b){this.xhrCbStart\u0026\u0026g.emit(\"xhr-cb-time\",[c.now()-this.xhrCbStart,this.onload,b],b)})}},{}],11:[function(a,f,d){f.exports=function(a){var b=document.createElement(\"a\"),d=window.location,e={};b.href=a;e.port=b.port;a=b.href.split(\":\/\/\");!e.port\u0026\u0026a[1]\u0026\u0026(e.port=a[1].split(\"\/\")[0].split(\"@\").pop().split(\":\")[1]);e.port\u0026\u0026\"0\"!==e.port||(e.port=\"https\"===a[0]?\"443\":\"80\");e.hostname=b.hostname||\nd.hostname;e.pathname=b.pathname;e.protocol=a[0];\"\/\"!==e.pathname.charAt(0)\u0026\u0026(e.pathname=\"\/\"+e.pathname);a=!b.protocol||\":\"===b.protocol||b.protocol===d.protocol;d=b.hostname===document.domain\u0026\u0026b.port===d.port;return e.sameOrigin=a\u0026\u0026(!b.hostname||d),e}},{}],12:[function(a,f,d){function b(){}function c(a,b,c){return function(){return k(a,[h.now()].concat(e(arguments)),b?null:this,c),b?void 0:this}}var k=a(\"handle\");d=a(15);var e=a(16),g=a(\"ee\").get(\"tracer\"),h=a(\"loader\"),l=NREUM;\"undefined\"==typeof window.newrelic\u0026\u0026\n(newrelic=l);a=\"setPageViewName setCustomAttribute setErrorHandler finished addToTrace inlineHit addRelease\".split(\" \");var m=\"api-\",n=m+\"ixn-\";d(a,function(a,b){l[b]=c(m+b,!0,\"api\")});l.addPageAction=c(m+\"addPageAction\",!0);l.setCurrentRouteName=c(m+\"routeName\",!0);f.exports=newrelic;l.interaction=function(){return(new b).get()};var q=b.prototype={createTracer:function(a,b){var c={},d=this,e=\"function\"==typeof b;return k(n+\"tracer\",[h.now(),a,c],d),function(){if(g.emit((e?\"\":\"no-\")+\"fn-start\",[h.now(),\nd,e],c),e)try{return b.apply(this,arguments)}catch(u){throw g.emit(\"fn-err\",[arguments,this,u],c),u;}finally{g.emit(\"fn-end\",[h.now()],c)}}}};d(\"setName setAttribute save ignore onEnd getContext end get\".split(\" \"),function(a,b){q[b]=c(n+b)});newrelic.noticeError=function(a){\"string\"==typeof a\u0026\u0026(a=Error(a));k(\"err\",[a,h.now()])}},{}],13:[function(a,f,d){f.exports=function(a){if(\"string\"==typeof a\u0026\u0026a.length)return a.length;if(\"object\"==typeof a){if(\"undefined\"!=typeof ArrayBuffer\u0026\u0026a instanceof ArrayBuffer\u0026\u0026\na.byteLength)return a.byteLength;if(\"undefined\"!=typeof Blob\u0026\u0026a instanceof Blob\u0026\u0026a.size)return a.size;if(!(\"undefined\"!=typeof FormData\u0026\u0026a instanceof FormData))try{return JSON.stringify(a).length}catch(c){}}}},{}],14:[function(a,f,d){a=0;(d=navigator.userAgent.match(\/Firefox[\\\/\\s](\\d+\\.\\d+)\/))\u0026\u0026(a=+d[1]);f.exports=a},{}],15:[function(a,f,d){function b(a,b){var d=[],e=\"\",f=0;for(e in a)c.call(a,e)\u0026\u0026(d[f]=b(e,a[e]),f+=1);return d}var c=Object.prototype.hasOwnProperty;f.exports=b},{}],16:[function(a,\nf,d){function b(a,b,d){b||(b=0);\"undefined\"==typeof d\u0026\u0026(d=a?a.length:0);var c=-1;d=d-b||0;for(var e=Array(0\u003Ed?0:d);++c\u003Cd;)e[c]=a[b+c];return e}f.exports=b},{}],17:[function(a,f,d){f.exports={exists:\"undefined\"!=typeof window.performance\u0026\u0026window.performance.timing\u0026\u0026\"undefined\"!=typeof window.performance.timing.navigationStart}},{}],18:[function(a,f,d){function b(a){return!(a\u0026\u0026a instanceof Function\u0026\u0026a.apply\u0026\u0026!a[e])}var c=a(\"ee\"),k=a(16),e=\"nr@original\",g=Object.prototype.hasOwnProperty,h=!1;f.exports=\nfunction(a,d){function f(a,c,d,f){function g(){var b;try{var e=this;var g=k(arguments);var h=\"function\"==typeof d?d(g,e):d||{}}catch(A){w([A,\"\",[g,e,f],h])}l(c+\"start\",[g,e,f],h);try{return b=a.apply(e,g)}catch(A){throw l(c+\"err\",[g,e,A],h),A;}finally{l(c+\"end\",[g,e,b],h)}}return b(a)?a:(c||(c=\"\"),g[e]=a,p(a,g),g)}function m(a,c,d,e){d||(d=\"\");var g,h=\"-\"===d.charAt(0);for(g=0;g\u003Cc.length;g++){var k=c[g];var l=a[k];b(l)||(a[k]=f(l,h?k+d:d,e,k))}}function l(b,c,e){if(!h||d){var f=h;h=!0;try{a.emit(b,\nc,e,d)}catch(x){w([x,b,c,e])}h=f}}function p(a,b){if(Object.defineProperty\u0026\u0026Object.keys)try{var c=Object.keys(a);return c.forEach(function(c){Object.defineProperty(b,c,{get:function(){return a[c]},set:function(b){return a[c]=b,b}})}),b}catch(x){w([x])}for(var d in a)g.call(a,d)\u0026\u0026(b[d]=a[d]);return b}function w(b){try{a.emit(\"internal-error\",b)}catch(t){}}return a||(a=c),f.inPlace=m,f.flag=e,f}},{}],ee:[function(a,f,d){function b(){}function c(a){function d(a){return a\u0026\u0026a instanceof b?a:a?h(a,g,k):\nk()}function f(b,c,e,f){if(!q.aborted||f){a\u0026\u0026a(b,c,e);e=d(e);f=t(b);for(var g=f.length,h=0;h\u003Cg;h++)f[h].apply(e,c);f=m[z[b]];return f\u0026\u0026f.push([B,b,c,e]),e}}function r(a,b){x[a]=t(a).concat(b)}function t(a){return x[a]||[]}function u(a){return n[a]=n[a]||c(f)}function y(a,b){l(a,function(a,c){b=b||\"feature\";z[c]=b;b in m||(m[b]=[])})}var x={},z={},B={on:r,emit:f,get:u,listeners:t,context:d,buffer:y,abort:e,aborted:!1};return B}function k(){return new b}function e(){(m.api||m.feature)\u0026\u0026(q.aborted=!0,\nm=q.backlog={})}var g=\"nr@context\",h=a(\"gos\"),l=a(15),m={},n={},q=f.exports=c();q.backlog=m},{}],gos:[function(a,f,d){function b(a,b,d){if(c.call(a,b))return a[b];d=d();if(Object.defineProperty\u0026\u0026Object.keys)try{return Object.defineProperty(a,b,{value:d,writable:!0,enumerable:!1}),d}catch(h){}return a[b]=d,d}var c=Object.prototype.hasOwnProperty;f.exports=b},{}],handle:[function(a,f,d){function b(a,b,d,f){c.buffer([a],f);c.emit(a,b,d)}var c=a(\"ee\").get(\"handle\");f.exports=b;b.ee=c},{}],id:[function(a,\nf,d){function b(a){var b=typeof a;return!a||\"object\"!==b\u0026\u0026\"function\"!==b?-1:a===window?0:e(a,k,function(){return c++})}var c=1,k=\"nr@id\",e=a(\"gos\");f.exports=b},{}],loader:[function(a,f,d){function b(){if(!y++){var a=u.info=NREUM.info,b=n.getElementsByTagName(\"script\")[0];if(setTimeout(m.abort,3E4),!(a\u0026\u0026a.licenseKey\u0026\u0026a.applicationID\u0026\u0026b))return m.abort();l(t,function(b,c){a[b]||(a[b]=c)});h(\"mark\",[\"onload\",e()+u.offset],null,\"api\");var c=n.createElement(\"script\");c.src=\"https:\/\/\"+a.agent;b.parentNode.insertBefore(c,\nb)}}function c(){\"complete\"===n.readyState\u0026\u0026k()}function k(){h(\"mark\",[\"domContent\",e()+u.offset],null,\"api\")}function e(){return x.exists\u0026\u0026performance.now?Math.round(performance.now()):(g=Math.max((new Date).getTime(),g))-u.offset}var g=(new Date).getTime(),h=a(\"handle\"),l=a(15),m=a(\"ee\");d=window;var n=d.document,q=\"addEventListener\",r=\"attachEvent\",p=d.XMLHttpRequest,w=p\u0026\u0026p.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:p,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};\nvar v=\"\"+location,t={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",agent:\"js-agent.newrelic.com\/nr-1071.min.js\"};p=p\u0026\u0026w\u0026\u0026w[q]\u0026\u0026!\/CriOS\/.test(navigator.userAgent);var u=f.exports={offset:g,now:e,origin:v,features:{},xhrWrappable:p};a(12);n[q]?(n[q](\"DOMContentLoaded\",k,!1),d[q](\"load\",b,!1)):(n[r](\"onreadystatechange\",c),d[r](\"onload\",b));h(\"mark\",[\"firstbyte\",g],null,\"api\");var y=0,x=a(17)},{}]},{},[\"loader\",2,10,4,3]);\nNREUM.info={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",licenseKey:\"17c6cf0b13\",applicationID:\"42577605\",sa:1};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":475
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(.*\\.)?tr\\.leagueoflegends\\.com(\/.*)?",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"Registration"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"analyticsEvent"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?.leagueoflegends.com\/tr\/signup\/download"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"tr download game"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?(\\.tr)?\\.leagueoflegends.com\/(en|tr)\/signup\/index\\?"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"leagueoflegends\\.co(m|\\.kr)"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"cookie-policy-agree"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.click"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"http:\/\/admin.staging.leagueoflegends.com"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"cn.leagueoflegends.com"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"0:"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"staging.na.leagueoflegends.com\/en\/featured\/clash"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"^[^2]+\\:.*$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"riotgamesbrasil.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?.ru.leagueoflegends.com\/ru\/signup\/index"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?\\.(euw|eune)\\.leagueoflegends.com\/..*\/signup\/index",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"^[^3]+\\:.*$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"na.leagueoflegends.com"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"na\\.leagueoflegends\\.com\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"promo.oce.leagueoflegends.com\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?\\.oce\\.leagueoflegends.com\/en\/signup\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"oce.lolesports.com\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?.leagueoflegends.com\/(en)\/signup\/index\\?"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"social-popup twitter"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"http:\/\/boards\\.na\\.leagueoflegends\\.com\/en\/c\/tips-tricks\/\\w{8}-the-climb(.*)?"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"c-btn__content"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?.(euw|eune).leagueoflegends.com\/..\/signup\/download",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"staging\\.(euw|eune)\\.leagueoflegends\\.com\/..\/featured\/thanks-eu"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav0"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.facebook.com\/MankejDesigns"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav1"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav2"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav3"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav4"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav5"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav6"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav7"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav8"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"nav9"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"http:\/\/meerclar.deviantart.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.facebook.com\/Evil-Cam-Works-481837115296828\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.facebook.com\/littlejemcosplay\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"http:\/\/akujin-b0x.deviantart.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.facebook.com\/OfficialAndrasta"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"http:\/\/kitsuneha.deviantart.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Warsongs Wallpaper Download"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Screensaver-Download-Mac"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Screensaver-Download-Win"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"battlegrounds.leagueoflegends.com"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"((^|\\.)(euw|eune)\\.)|timeline.leagueoflegends.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"c-videos__play-btn-img c-videos__play-btn-img--hover"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"play.na.leagueoflegends.com\/en_US"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"A New Dawn Cinematic"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"What is LoL?"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"c-icon c-icon--twitter"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"c-icon c-icon--facebook"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"c-btn-slide__block c-btn-slide__block--bottom u-text-strut"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"https:\/\/ulol.na.leagueoflegends.com\/profile"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"gaDownload"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"gaDownload"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"seninefsanen\\.leagueoflegends.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"gaShare"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"gaShare"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"gaPlay"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"gaPlay"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"gaDuration"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"gaDuration"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"gaShared"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"gaShared"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"gaCopyLink"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"gaCopyLink"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"euw.leagueoflegends.com"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"eune.leagueoflegends.com"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/cs_CZ"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/el_GR"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/en_PL"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/hu_HU"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/pl_PL"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/ro_RO"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/de_DE"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/en_GB"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/es_ES"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/fr_FR"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"universe.leagueoflegends.com\/it_IT"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"FAN ART"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"c-btn__content"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(https:\/\/signup[0-9]?\\.(.*\\.)?leagueoflegends\\.com\/(.*\/)?signup\/download(\\?.*)?)|(https:\/\/signup\\.(.*\\.)?riotgames\\.jp\/(.*\/)?signup\/download(\\?.*)?)"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"js-platform"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"c-btn--download__icon js-platform-icon"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"c-btn--download__text-container"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"c-btn--download__text-download"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"c-btn--download__text-info"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"js-region"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(https:\/\/signup[0-9]?\\.(.*\\.)?leagueoflegends\\.com\/(.*\/)?signup\/redownload(\\?.*)?)|(https:\/\/signup\\.(.*\\.)?riotgames\\.jp\/(.*\/)?signup\/redownload(\\?.*)?)"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"True"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"(c\\-btn\\_\\_content)|(c\\-button\\-primary c\\-btn\\_\\_content)"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"https:\\\/\\\/signup(\\-old|\\-pcu|[0-9])?\\.(.*\\.)?leagueoflegends\\.com\/(.*\/)?signup\/index(\\?.*)?"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"c-download-link"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"c-download-link"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"New Player Signup"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"VirtualPageview"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"GAEvent"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?\\.na\\.leagueoflegends\\.com\/((.*\/)?signup\/index(\\?.*)?|en\/a[2-5]\/(welcome|signup\/download)(\\?.*)?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^play\\.([a-z]{2,4})\\.leagueoflegends\\.com",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",15],
      "arg1":"signup.na.leagueoflegends.com"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"\/odyssey-signup"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"signup.na.leagueoflegends.com\/en\/signup\/index#\/download"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Re-Download Click"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"Signup Conversion Page"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"New Player Signup"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"https\\:\\\/\\\/signup\\.euw\\.leagueoflegends\\.com\\\/(.*)\\\/signup\\\/index"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"signup.na.leagueoflegends.com"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"conversion"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"(^$|((^|,)59448_672($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"video_promo"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"jp.leagueoflegends.com\/ja\/featured\/welcome-b"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":"(^$|((^|,)59448_678($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"jp.leagueoflegends.com"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(.*\\.)?jp\\.leagueoflegends\\.com(\/.*)?",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"ask.leagueoflegends.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"btn-large btn-large-primary"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"http:\/\/signup.jp.leagueoflegends.com\/ja"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"((ru\\.leagueoflegends\\.com)|(signup\\.ru\\.leagueoflegends\\.com\/ru\/))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"http:\/\/(na|euw|eune|br|tr|ru|oce|lan|las)\\.leagueoflegends\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"^(na|euw|eune|tr|br|ru|oce|lan|las|kr|jp)\\.leagueoflegends\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"na\\.leagueoflegends\\.com(\/.*)?"
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"hittp:\/\/gameinfo.na.leagueoflegends.com\/en\/game-info\/get-started\/new-player-guide\/"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"http:\/\/gameinfo.na.leagueoflegends.com\/en\/game-info\/"
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"https:\/\/signup[0-9]?.na.leagueoflegends.com\/en\/signup\/overview"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"oce.leagueoflegends.com"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"^(gtm\\.js|persist(Save|Replace|Delete))"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"signup[0-9]?\\.oce\\.leagueoflegends\\.com\/(.*\/)?signup\/redownload(\\?.*)?"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"signup[0-9]?(\\.tr)?\\.leagueoflegends.com\/(en|tr)\/signup\/.*"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?\\.(.*\\.)leagueoflegends.com\/(.*)\/signup\/index(\\?.*)?"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"br.leagueoflegends.com"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"leagueoflegends.com"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"^[^1]+\\:.*$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"leagueoflegends.co.kr"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"pentakill.leagueoflegends.com"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"https:\/\/leagueu.jp.leagueoflegends.com\/register",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"signup[0-9]?\\.jp\\.leagueoflegends\\.com\/ja\/signup\/index",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"https:\\\/\\\/signup[0-9]?\\.ru\\.leagueoflegends\\.com\/ru\/signup\/(download|overview)(\\?.*)?"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"admitad"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"signup.euw.leagueoflegends.com\/en\/signup\/index#\/"
    }],
  "rules":[
    [["if",0,1],["add",2,235]],
    [["if",2,3],["add",3,5,10,12,236,7,243,9,54,57,62,67,69,74,89,249,280,295,83,85,86,87,265,282,283,284,285,286,287,288,252],["block",235]],
    [["if",4,5],["add",4]],
    [["if",1,6],["add",5,11]],
    [["if",1,7],["add",0,281]],
    [["if",8,9],["add",0]],
    [["if",1,15],["add",6]],
    [["if",1,16],["add",8]],
    [["if",1,17],["add",9]],
    [["if",1,20,21,22],["add",13]],
    [["if",1,23],["add",14]],
    [["if",1,11],["add",15],["block",0]],
    [["if",1,24],["add",16]],
    [["if",9,25,26],["add",17]],
    [["if",9,27,28],["add",18]],
    [["if",3],["add",19]],
    [["if",9,29,30],["add",20]],
    [["if",9,29,31],["add",21]],
    [["if",9,29,32],["add",22]],
    [["if",9,29,33],["add",23]],
    [["if",9,29,34],["add",24]],
    [["if",9,29,35],["add",25]],
    [["if",9,29,36],["add",26]],
    [["if",9,29,37],["add",27]],
    [["if",9,29,38],["add",28]],
    [["if",9,29,39],["add",29]],
    [["if",9,29,40],["add",30]],
    [["if",9,29,41],["add",31]],
    [["if",9,29,42],["add",32]],
    [["if",9,29,43],["add",33]],
    [["if",9,29,44],["add",34]],
    [["if",9,29,45],["add",35]],
    [["if",9,29,46],["add",36]],
    [["if",3,47],["add",37,38]],
    [["if",3,48],["add",39]],
    [["if",3,49],["add",40]],
    [["if",1,50],["add",41,298]],
    [["if",1,51],["add",42]],
    [["if",9,52,53],["add",43]],
    [["if",9,53,54],["add",43]],
    [["if",9,53,55],["add",43]],
    [["if",9,53,56],["add",44]],
    [["if",9,53,57],["add",45]],
    [["if",9,58,59],["add",46]],
    [["if",60,61],["add",47]],
    [["if",1,62],["add",47,48,49,50]],
    [["if",63,64],["add",48]],
    [["if",65,66],["add",49]],
    [["if",67,68],["add",50]],
    [["if",69,70],["add",51]],
    [["if",71,72],["add",52]],
    [["if",1],["add",53,61,65,68,230,231,238,247,248,258,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,222,223,224]],
    [["if",9,86],["add",55]],
    [["if",9,87,88,89],["add",56,250]],
    [["if",9,88,89,90],["add",56,250]],
    [["if",9,88,89,91],["add",56,250]],
    [["if",9,88,89,92],["add",56,250]],
    [["if",9,88,89,93],["add",56,250]],
    [["if",9,88,89,94],["add",56,250]],
    [["if",9,88,89,95],["add",56,250]],
    [["if",9,87,89,96],["add",56,250]],
    [["if",9,89,90,96],["add",56,250]],
    [["if",9,91,96,97],["add",56,250]],
    [["if",9,89,92,96],["add",56,250]],
    [["if",9,89,93,96],["add",56,250]],
    [["if",9,89,94,96],["add",56,250]],
    [["if",9,95,96,97],["add",56,250]],
    [["if",9,98,99,100],["unless",89],["add",56,250]],
    [["if",9,88,89,101],["add",56,250]],
    [["if",9,96,97,102],["add",56,250]],
    [["if",3,103],["add",56,72,75,84,90,250,257,259,289,290]],
    [["if",104],["add",58]],
    [["if",105],["add",59]],
    [["if",1,106],["add",60,292]],
    [["if",1,107],["add",60]],
    [["if",1,108,109],["add",60,292]],
    [["if",3,111],["add",63,66,70,71,256,296]],
    [["if",3,112,113],["add",64,294]],
    [["if",1,114],["add",73]],
    [["if",115,116],["add",76,293,297]],
    [["if",117,118],["add",77]],
    [["if",9,119,120],["add",78]],
    [["if",121,122],["add",78]],
    [["if",3,103,123],["add",79,80,81,262,263,264,266,267,268,269,270,271],["block",272,274,275,276,277,291]],
    [["if",1,124],["add",82,88,272,273,274,275,276,277,278,279,291]],
    [["if",1,125,126],["add",180]],
    [["if",1,127],["add",221]],
    [["if",1,128],["add",225,244,245,246]],
    [["if",1,129],["add",226]],
    [["if",1,130],["add",227]],
    [["if",1,131],["add",228]],
    [["if",1,132],["add",229]],
    [["if",1,133],["add",229]],
    [["if",1,134],["add",229]],
    [["if",1,135],["add",232]],
    [["if",136],["add",233]],
    [["if",1,137],["add",234]],
    [["if",1,138],["add",237]],
    [["if",1,139],["add",239,242]],
    [["if",1,140],["add",240]],
    [["if",1,141],["add",241]],
    [["if",1,145],["add",251]],
    [["if",1,146],["add",253]],
    [["if",1,147],["add",254]],
    [["if",1,148],["add",255]],
    [["if",2,3,19],["add",260],["block",10,12,69,89]],
    [["if",1,149],["add",261]],
    [["if",1,10],["block",0]],
    [["if",1,12],["block",0,9,19,42,53,56,57,61,62,63,65,66,67,68,69,70,71,72,73,74,75,84,89,90,227,230,231,233,238,239,241,242,247,248,249,250,256,257,258,259,261,280,281,289,290,295,296]],
    [["if",1,13],["block",0]],
    [["if",1,14],["block",0,19,41,53,227,230,231,238,239,242,247,298]],
    [["if",1,18],["block",9,42,56,57,61,62,63,65,66,67,68,69,70,71,72,73,74,75,84,89,90,248,249,250,256,257,258,259,261,280,281,289,290,295,296]],
    [["if",1,19],["block",11,68]],
    [["if",1,73],["block",53]],
    [["if",1,74],["block",53]],
    [["if",1,75],["block",53]],
    [["if",1,76],["block",53]],
    [["if",1,77],["block",53]],
    [["if",1,78],["block",53]],
    [["if",1,79],["block",53]],
    [["if",1,80],["block",53]],
    [["if",1,81],["block",53]],
    [["if",1,82],["block",53]],
    [["if",1,83],["block",53]],
    [["if",1,84],["block",53]],
    [["if",1,85],["block",53]],
    [["if",1,110],["block",60]],
    [["if",3,19,111],["block",71]],
    [["if",3,19,103],["block",72,90]],
    [["if",1,142],["block",241,298]],
    [["if",1,143],["block",242]],
    [["if",1,144],["block",242]]]
},
"runtime":[
[],[]
]
};
var f,aa=this,da=function(){if(null===ba){var a;a:{var b=aa.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&ca.test(d)){a=d;break a}}a=null}ba=a||""}return ba},ca=/^[\w+/_-]+[=]{0,2}$/,ba=null,ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},fa=function(a,b){function c(){}c.prototype=b.prototype;a.Yg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Hg=function(a,c,g){for(var d=Array(arguments.length-2),
e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ja=function(a,b){this.C=a;this.$e=b};ja.prototype.rf=function(){return this.C};ja.prototype.getData=function(){return this.$e};ja.prototype.getData=ja.prototype.getData;ja.prototype.getType=ja.prototype.rf;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ma=function(){this.za={};this.Sa=!1};ma.prototype.get=function(a){return this.za["dust."+a]};ma.prototype.set=function(a,b){!this.Sa&&(this.za["dust."+a]=b)};ma.prototype.has=function(a){return this.za.hasOwnProperty("dust."+a)};var na=function(a){var b=[],c;for(c in a.za)a.za.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ma.prototype.remove=function(a){!this.Sa&&delete this.za["dust."+a]};ma.prototype.N=function(){this.Sa=!0};var n=function(a){this.Da=new ma;this.i=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.i[Number(b)]=a[Number(b)]:this.Da.set(b,a[b]))};f=n.prototype;f.toString=function(){for(var a=[],b=0;b<this.i.length;b++){var c=this.i[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};f.set=function(a,b){if("length"==a){if(!ka(b))throw Error("RangeError: Length property must be a valid integer.");this.i.length=Number(b)}else ka(a)?this.i[Number(a)]=b:this.Da.set(a,b)};
f.get=function(a){return"length"==a?this.length():ka(a)?this.i[Number(a)]:this.Da.get(a)};f.length=function(){return this.i.length};f.ca=function(){for(var a=na(this.Da),b=0;b<this.i.length;b++)a.push(b+"");return new n(a)};f.remove=function(a){ka(a)?delete this.i[Number(a)]:this.Da.remove(a)};f.pop=function(){return this.i.pop()};f.push=function(a){return this.i.push.apply(this.i,Array.prototype.slice.call(arguments))};f.shift=function(){return this.i.shift()};
f.splice=function(a,b,c){return new n(this.i.splice.apply(this.i,arguments))};f.unshift=function(a){return this.i.unshift.apply(this.i,Array.prototype.slice.call(arguments))};f.has=function(a){return ka(a)&&this.i.hasOwnProperty(a)||this.Da.has(a)};n.prototype.unshift=n.prototype.unshift;n.prototype.splice=n.prototype.splice;n.prototype.shift=n.prototype.shift;n.prototype.push=n.prototype.push;n.prototype.pop=n.prototype.pop;n.prototype.remove=n.prototype.remove;n.prototype.getKeys=n.prototype.ca;
n.prototype.get=n.prototype.get;n.prototype.set=n.prototype.set;var oa=function(){function a(a,b){c[a]=b}function b(){c={};h=!1}var c={},d,e,g={},h=!1,k={add:a,dd:function(a,b,c){g[a]||(g[a]={});g[a][b]=c},create:function(g){var k={add:a,assert:function(a,b){if(!h){var k=c[a]||d;k&&k.apply(g,Array.prototype.slice.call(arguments,0));e&&e.apply(g,Array.prototype.slice.call(arguments,0))}},reset:b};k.add=k.add;k.assert=k.assert;k.reset=k.reset;return k},Bd:function(a){return g[a]?(b(),c=g[a],!0):!1},Ea:function(a){d=a},Fa:function(a){e=a},reset:b,Md:function(a){h=
a}};k.add=k.add;k.addToCache=k.dd;k.loadFromCache=k.Bd;k.registerDefaultPermission=k.Ea;k.registerGlobalPermission=k.Fa;k.reset=k.reset;k.setPermitAllAsserts=k.Md;return k};var pa=function(){function a(a,c){if(b[a]){if(b[a].sb+c>b[a].max)throw Error("Quota exceeded");b[a].sb+=c}}var b={},c=void 0,d=void 0,e={Tf:function(a){c=a},ed:function(){c&&a(c,1)},Uf:function(a){d=a},aa:function(b){d&&a(d,b)},og:function(a,c){b[a]=b[a]||{sb:0};b[a].max=c},qf:function(a){return b[a]&&b[a].sb||0},reset:function(){b={}},Ue:a};e.onFnConsume=e.Tf;e.consumeFn=e.ed;e.onStorageConsume=e.Uf;e.consumeStorage=e.aa;e.setMax=e.og;e.getConsumed=e.qf;e.reset=e.reset;e.consume=e.Ue;return e};var qa=function(a,b,c){this.O=a;this.I=b;this.ia=c;this.i=new ma};f=qa.prototype;f.add=function(a,b){this.i.Sa||(this.O.aa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b))};f.set=function(a,b){this.i.Sa||(this.ia&&this.ia.has(a)?this.ia.set(a,b):(this.O.aa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};f.get=function(a){return this.i.has(a)?this.i.get(a):this.ia?this.ia.get(a):void 0};
f.has=function(a){return!!this.i.has(a)||!(!this.ia||!this.ia.has(a))};f.L=function(){return this.O};f.N=function(){this.i.N()};qa.prototype.has=qa.prototype.has;qa.prototype.get=qa.prototype.get;qa.prototype.set=qa.prototype.set;qa.prototype.add=qa.prototype.add;var ra=function(){},sa=function(a){return"function"==typeof a},ta=function(a){return"string"==typeof a},ua=function(a){return"number"==typeof a&&!isNaN(a)},va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&va(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!ua(a)||
!ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ba=function(a){return Math.round(Number(a))||0},Da=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ea=function(a){var b=[];if(va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},Ha=function(){this.prefix="gtm.";this.values={}};Ha.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ha.prototype.get=function(a){return this.values[this.prefix+a]};Ha.prototype.contains=function(a){return void 0!==this.get(a)};var Ia=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ja=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ka=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},La=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ma=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};var r=function(a,b){ma.call(this);this.Cd=a;this.lf=b};fa(r,ma);var Oa=function(a,b){for(var c,d=0;d<b.length&&!(c=Na(a,b[d]),c instanceof ja);d++);return c},Na=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof r))throw Error("Attempting to execute non-function "+b[0]+".");return c.o.apply(c,[a].concat(b.slice(1)))};r.prototype.toString=function(){return this.Cd};r.prototype.getName=function(){return this.Cd};r.prototype.getName=r.prototype.getName;r.prototype.ca=function(){return new n(na(this))};
r.prototype.getKeys=r.prototype.ca;r.prototype.o=function(a,b){var c,d={H:function(){return a},evaluate:function(b){var c=a;return va(b)?Na(c,b):b},Pa:function(b){return Oa(a,b)},L:function(){return a.L()},J:function(){c||(c=a.I.create(d));return c}};a.L().ed();return this.lf.apply(d,Array.prototype.slice.call(arguments,1))};r.prototype.invoke=r.prototype.o;var Pa=function(){ma.call(this)};fa(Pa,ma);Pa.prototype.ca=function(){return new n(na(this))};Pa.prototype.getKeys=Pa.prototype.ca;var Qa=/^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Ra={Fn:"function",Map:"Object",List:"Array"},Ta=function(a,b){for(var c=0;c<a.length;c++){var d=Qa.exec(a[c]);if(!d)throw Error("Internal Error");var e=d[1],g="!"===d[2],h=d[3],k=b[c],l=typeof k;if(null===k||"undefined"===l){if(g)throw Error("Required argument "+e+" not supplied.");}else if("*"!==h){var m=typeof k;k instanceof r?m="Fn":k instanceof n?m="List":k instanceof Pa&&(m="Map");if(m!=h)throw Error("Argument "+e+" does not match required type "+
(Ra[h]||h)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ua=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Va=function(a){if(null==a)return String(a);var b=Ua.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Wa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Xa=function(a){if(!a||"object"!=Va(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Wa(a,"constructor")&&!Wa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Wa(a,b)},x=function(a,b){var c=b||("array"==Va(a)?[]:{}),d;for(d in a)if(Wa(a,d)){var e=a[d];"array"==Va(e)?("array"!=Va(c[d])&&(c[d]=[]),c[d]=x(e,c[d])):Xa(e)?(Xa(c[d])||(c[d]={}),c[d]=x(e,c[d])):c[d]=e}return c};var Ya=function(a){if(a instanceof n){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Ya(a.get(d)));return b}if(a instanceof Pa){for(var e={},g=a.ca(),h=g.length(),k=0;k<h;k++)e[g.get(k)]=Ya(a.get(g.get(k)));return e}return a instanceof r?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Za(b[c]);var d=new qa(pa(),oa());return Ya(a.o.apply(a,[d].concat(b)))}:a},Za=function(a){if(va(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Za(a[c]));return new n(b)}if(Xa(a)){var d=
new Pa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Za(a[e]));return d}if("function"===typeof a)return new r("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Ya(this.evaluate(c[d]));return Za(a.apply(a,c))});var g=typeof a;if(null===a||"string"===g||"number"===g||"boolean"===g)return a};var ab={control:function(a,b){return new ja(a,this.evaluate(b))},fn:function(a,b,c){var d=this.H(),e=this.evaluate(b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var g=Array.prototype.slice.call(arguments,2);this.L().aa(a.length+g.length);return new r(a,function(){return function(a){for(var b=new qa(d.O,d.I,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof ja)return c[h];for(var p=e.get("length"),q=
0;q<p;q++)q<c.length?b.set(e.get(q),c[q]):b.set(e.get(q),void 0);b.set("arguments",new n(c));var t=Oa(b,g);if(t instanceof ja)return"return"===t.C?t.getData():t}}())},list:function(a){var b=this.L();b.aa(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.aa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.L(),c=new Pa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",g=this.evaluate(arguments[d+
1]),h=e.length;h+="string"===typeof g?g.length:1;b.aa(h);c.set(e,g)}return c},undefined:function(){}};var bb=function(){this.O=pa();this.I=oa();this.Qa=new qa(this.O,this.I)};f=bb.prototype;f.Z=function(a,b){var c=new r(a,b);c.N();this.Qa.set(a,c)};f.cd=function(a,b){ab.hasOwnProperty(a)&&this.Z(b||a,ab[a])};f.L=function(){return this.O};f.zb=function(){this.O=pa();this.Qa.O=this.O};f.lg=function(){this.I=oa();this.Qa.I=this.I};f.M=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.uc(c)};
f.uc=function(a){for(var b,c=0;c<arguments.length;c++){var d=Na(this.Qa,arguments[c]);b=d instanceof ja||d instanceof r||d instanceof n||d instanceof Pa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};f.N=function(){this.Qa.N()};bb.prototype.makeImmutable=bb.prototype.N;bb.prototype.run=bb.prototype.uc;bb.prototype.execute=bb.prototype.M;bb.prototype.resetPermissions=bb.prototype.lg;bb.prototype.resetQuota=bb.prototype.zb;
bb.prototype.getQuota=bb.prototype.L;bb.prototype.addNativeInstruction=bb.prototype.cd;bb.prototype.addInstruction=bb.prototype.Z;var cb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var db={sg:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var g=arguments[e],h=0;h<g.length();h++)c.push(g.get(h));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var g=e;g<d;g++)if(this.has(g)&&this.get(g)===
b)return g;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var g=e;0<=g;g--)if(this.has(g)&&this.get(g)===b)return g;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);g=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=g;k<d;k++)this.has(k)&&(e=b.o(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);g=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=g;0<=k;k--)this.has(k)&&(e=b.o(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=cb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],g=b;g<c;g++)e.push(this.get(g));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=cb(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.o(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={vd:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},eb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),fb=new ja("break"),gb=new ja("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=xa(eb,b))return Za(a[b].apply(a,cb(c)));throw Error("TypeError: "+b+" is not a function");
}if(a instanceof n){if(a.has(b)){var d=a.get(b);if(d instanceof r){var e=cb(c);e.unshift(this.H());return d.o.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=xa(db.sg,b)){var g=cb(c);g.unshift(this.H());return db[b].apply(a,g)}}if(a instanceof r||a instanceof Pa){if(a.has(b)){var h=a.get(b);if(h instanceof r){var k=cb(c);k.unshift(this.H());return h.o.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof r?a.getName():a.toString();if("hasOwnProperty"==
b)return a.has.apply(a,cb(c))}throw Error("TypeError: Object has no '"+b+"' property.");};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.H();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return fb};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof ja)return d}};
y["continue"]=function(){return gb};y.af=function(a,b,c){var d=new n;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var g=[y.vd.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.H().set(a,this.evaluate(g))};y.df=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.hf=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.jf=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.nf=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.H();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var g=this.Pa(c);if(g instanceof ja){if("break"==g.C)break;if("return"==g.C)return g}}else if(b instanceof Pa||b instanceof n||b instanceof r)for(var h=b.ca(),k=h.length(),l=0;l<k;l++){d.set(a,h.get(l));var m=this.Pa(c);if(m instanceof ja){if("break"==m.C)break;if("return"==m.C)return m}}};y.get=function(a){return this.H().get(this.evaluate(a))};
y.pd=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Pa||a instanceof n||a instanceof r?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};y.sf=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.tf=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Af=function(a,b){return this.evaluate(a)===this.evaluate(b)};
y.Bf=function(a,b){return this.evaluate(a)!==this.evaluate(b)};y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Pa(d);if(e instanceof ja)return e};y.Jf=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.Kf=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.Of=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.Pf=function(a){return-this.evaluate(a)};y.Qf=function(a){return!this.evaluate(a)};
y.Rf=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.Id=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.Jd=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new ja("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof r||a instanceof n||a instanceof Pa)&&a.set(b,c);return c};y.rg=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!va(b)||!va(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,g=0;g<b.length;g++)if(e||a===this.evaluate(b[g]))if(d=this.evaluate(c[g]),d instanceof ja){var h=d.C;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof ja&&("return"==d.C||"continue"==d.C)))return d};
y.ug=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof r?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.H(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,g=this.evaluate(d);if(this.evaluate(c)&&(e=this.Pa(g),e instanceof ja)){if("break"==e.C)return;if("return"==e.C)return e}for(;this.evaluate(a);){e=this.Pa(g);if(e instanceof ja){if("break"==e.C)break;if("return"==e.C)return e}this.evaluate(b)}};var ib=function(){this.ud=!1;this.F=new bb;hb(this);this.ud=!0};ib.prototype.Gf=function(){return this.ud};ib.prototype.isInitialized=ib.prototype.Gf;ib.prototype.M=function(a){this.F.I.Bd(String(a[0]))||(this.F.I.reset(),this.F.I.Md(!0));return this.F.uc(a)};ib.prototype.execute=ib.prototype.M;ib.prototype.N=function(){this.F.N()};ib.prototype.makeImmutable=ib.prototype.N;
var hb=function(a){function b(a,b){e.F.cd(a,String(b))}function c(a,b){e.F.Z(String(d[a]),b)}var d=y.vd,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.af);c("DIVIDE",y.df);c("EQUALS",y.hf);c("EXPRESSION_LIST",y.jf);c("FOR_IN",y.nf);c("GET",y.get);c("GET_INDEX",
y.pd);c("GET_PROPERTY",y.pd);c("GREATER_THAN",y.sf);c("GREATER_THAN_EQUALS",y.tf);c("IDENTITY_EQUALS",y.Af);c("IDENTITY_NOT_EQUALS",y.Bf);c("IF",y["if"]);c("LESS_THAN",y.Jf);c("LESS_THAN_EQUALS",y.Kf);c("MODULUS",y.Of);c("MULTIPLY",y.multiply);c("NEGATE",y.Pf);c("NOT",y.Qf);c("NOT_EQUALS",y.Rf);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.Id);c("POST_INCREMENT",y.Id);c("PRE_DECREMENT",y.Jd);c("PRE_INCREMENT",y.Jd);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.rg);c("SWITCH",y["switch"]);c("TERNARY",y.ug);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};ib.prototype.Z=function(a,b){this.F.Z(a,b)};ib.prototype.addInstruction=ib.prototype.Z;ib.prototype.L=function(){return this.F.L()};ib.prototype.getQuota=ib.prototype.L;ib.prototype.zb=function(){this.F.zb()};ib.prototype.resetQuota=ib.prototype.zb;ib.prototype.Ea=function(a){this.F.I.Ea(a)};ib.prototype.Fa=function(a){this.F.I.Fa(a)};
ib.prototype.qb=function(a,b,c){this.F.I.dd(a,b,c)};var jb=function(){this.wb={}};jb.prototype.get=function(a){return this.wb.hasOwnProperty(a)?this.wb[a]:void 0};jb.prototype.add=function(a,b){if(this.wb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined function: "+a+".";var c=new r(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.N();this.wb[a]=c};
jb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var z=window,A=document,kb=navigator,lb=A.currentScript&&A.currentScript.src,mb=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},nb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ob=function(a,b,c){var d=A.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;nb(d,b);c&&(d.onerror=c);da()&&d.setAttribute("nonce",da());var e=A.getElementsByTagName("script")[0]||A.body||A.head;
e.parentNode.insertBefore(d,e);return d},pb=function(){if(lb){var a=lb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},qb=function(a,b){var c=A.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=A.body&&A.body.lastChild||A.body||A.head;d.parentNode.insertBefore(c,d);nb(c,b);void 0!==a&&(c.src=a);return c},rb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=
function(){d.onerror=null;c&&c()};d.src=a},sb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},tb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},B=function(a){z.setTimeout(a,0)},vb=function(a){var b=A.getElementById(a);if(b&&ub(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ub(document.all[a][c],"id")==a)return document.all[a][c];return b},ub=function(a,b){return a&&b&&a.attributes&&
a.attributes[b]?a.attributes[b].value:null},wb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},yb=function(a){var b=A.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},zb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ab=function(a){kb.sendBeacon&&kb.sendBeacon(a)||rb(a)};var Bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Cb=/:[0-9]+$/,Db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")==b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Fb=function(a,b,c,d,e){var g,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(z.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":g=Eb(a);break;case "protocol":g=k;break;case "host":g=(a.hostname||z.location.hostname).replace(Cb,
"").toLowerCase();if(c){var l=/^www\d*\./.exec(g);l&&l[0]&&(g=g.substr(l[0].length))}break;case "port":g=String(Number(a.hostname?a.port:z.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":g="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=g.split("/");0<=xa(d||[],m[m.length-1])&&(m[m.length-1]="");g=m.join("/");break;case "query":g=a.search.replace("?","");e&&(g=Db(g,e));break;case "extension":var p=a.pathname.split(".");g=1<p.length?p[p.length-1]:"";g=g.split("/")[0];
break;case "fragment":g=a.hash.replace("#","");break;default:g=a&&a.href}return g},Eb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},E=function(a){var b=document.createElement("a");a&&(Bb.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Ib=function(){this.Ua=new ib;var a=new jb;a.addAll(Gb());Hb(this,function(b){return a.get(b)})},Gb=function(){return{callInWindow:Jb,callLater:Kb,copyFromWindow:Lb,createQueue:Nb,createArgumentsQueue:Ob,encodeURI:Pb,encodeURIComponent:Qb,getReferrer:Rb,getUrl:Sb,getUrlFragment:Tb,isPlainObject:Ub,injectHiddenIframe:Vb,injectScript:Wb,logToConsole:Xb,queryPermission:Yb,removeUrlFragment:Zb,replaceAll:$b,sendPixel:ac,setInWindow:bc}};Ib.prototype.M=function(a){return this.Ua.M(a)};
Ib.prototype.execute=Ib.prototype.M;var Hb=function(a,b){a.Ua.Z("require",b)};Ib.prototype.Ea=function(a){this.Ua.Ea(a)};Ib.prototype.Fa=function(a){this.Ua.Fa(a)};Ib.prototype.qb=function(a,b,c){this.Ua.qb(a,b,c)};function Jb(a,b){Ta(["path:!string"],[a]);for(var c=a.split("."),d=z,e=d[c[0]],g=1;e&&g<c.length;g++)d=e,e=e[c[g]];if("function"==Va(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(Ya(arguments[k]));e.apply(d,h)}}
function Kb(a){Ta(["fn:!Fn"],arguments);var b=this.H();B(function(){a instanceof r&&a.o(b)})}function Lb(a){Ta(["path:!string"],arguments);this.J().assert("access_globals","read",a);var b=a.split("."),c=z,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c||null===c)return;return Za(c[b[d]])}function Rb(){return A.referrer}
function Sb(a,b,c,d){Ta(["component:!string","stripWww:?boolean","defaultPages:?List","queryKey:?string"],arguments);this.J().assert("get_url",a,d);var e=z.location.href,g;if(c){g=[];for(var h=0;h<c.length();h++){var k=c.get(h);"string"==typeof k&&g.push(k)}}return Fb(E(e),a,b,g,d)}function Tb(a){Ta(["url:!string"],arguments);return Fb(E(a),"fragment")}function Ub(a){return a instanceof Pa}
function Vb(a,b){Ta(["url:!string","onSuccess:?Fn"],arguments);this.J().assert("inject_hidden_iframe",a);var c=this.H();qb(a,function(){b instanceof r&&b.o(c)})}var cc={};
function Wb(a,b,c,d){Ta(["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);this.J().assert("inject_script",a);var e=this.H(),g=function(){b instanceof r&&b.o(e)},h=function(){c instanceof r&&c.o(e)};if(d){var k=d;cc[k]?(cc[k].onSuccess.push(g),cc[k].onFailure.push(h)):(cc[k]={onSuccess:[g],onFailure:[h]},g=function(){for(var a=cc[k].onSuccess,b=0;b<a.length;b++)B(a[b]);a.push=function(a){B(a);return 0}},h=function(){for(var a=cc[k].onFailure,b=0;b<a.length;b++)B(a[b]);
cc[k]=null},ob(a,g,h))}else ob(a,g,h)}function Xb(){try{this.J().assert("logging")}catch(c){return}for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Ya(a[b]);console.log.apply(console,a)}function Zb(a){return Eb(E(a))}function $b(a,b,c){Ta(["string:!string","regex:!string","replacement:!string"],arguments);return a.replace(new RegExp(b,"g"),c)}
function ac(a,b,c){Ta(["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);this.J().assert("send_pixel",a);var d=this.H();rb(a,function(){b instanceof r&&b.o(d)},function(){c instanceof r&&c.o(d)})}function bc(a,b,c){Ta(["path:!string","value:?*","overrideExisting:?boolean"],arguments);this.J().assert("access_globals","readwrite",a);var d=a.split("."),e=z,g;for(g=0;g<d.length-1;g++)if(e=e[d[g]],void 0===e)return!1;return void 0===e[d[g]]||c?(e[d[g]]=Ya(b),!0):!1}
function Nb(a){Ta(["path:!string"],arguments);this.J().assert("access_globals","readwrite",a);var b=dc(a),c=a.split(".").pop(),d=b[c];void 0===d&&(d=[],b[c]=d);return Za(function(){if(!sa(d.push))throw Error("Object at "+a+" in window is not an array.");fc(arguments);d.push.apply(d,Array.prototype.slice.call(arguments,0))})}
function Ob(a,b){Ta(["functionPath:!string","arrayPath:!string"],arguments);this.J().assert("access_globals","readwrite",a);this.J().assert("access_globals","readwrite",b);var c=dc(a),d=a.split(".").pop(),e=c[d];if(e&&!sa(e))return null;if(e){var g=e;e=function(){fc(arguments);g.apply(g,Array.prototype.slice.call(arguments,0))};return Za(e)}var h;e=function(){if(!sa(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};c[d]=e;var k=dc(b),l=b.split(".").pop();
h=k[l];void 0===h&&(h=[],k[l]=h);return Za(function(){fc(arguments);e.apply(e,Array.prototype.slice.call(arguments,0))})}function fc(a){for(var b=0;b<a.length;b++){var c=a[b];c&&ea(c)&&Object.defineProperty(c,"gtm",{value:{fromContainer:!0}})}}function dc(a){for(var b=a.split("."),c=z,d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c)throw Error("Path "+a+" does not exist.");return c}
function Yb(a,b){Ta(["permission:!string"],[a]);try{return this.J().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}}function Pb(a){Ta(["uri:!string"],arguments);return encodeURI(a)}function Qb(a){Ta(["uri:!string"],arguments);return encodeURIComponent(a)};
var gc=[],hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ic=function(a){return hc[a]},jc=/[\x00\x22\x26\x27\x3c\x3e]/g;gc[3]=function(a){return String(a).replace(jc,ic)};var nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},pc=function(a){return oc[a]};gc[7]=function(a){return String(a).replace(nc,pc)};
gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(nc,pc)+"'"}};var xc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,yc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},zc=function(a){return yc[a]};var Ac=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;gc[14]=function(a){var b=String(a);return Ac.test(b)?b.replace(xc,zc):"#zSoyz"};gc[16]=function(a){return a};var Bc,Cc=[],Dc=[],Ec=[],Fc=[],Hc=[],Ic={},Jc,Kc,Lc,Mc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Nc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!Ic[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Ic[b](d):Bc(b,d)},Pc=function(a,b,c,d){c=c||[];d=d||ra;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Oc(a[g],b,c,d));return e},
Qc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ic[b];return c?c.b||0:0},Oc=function(a,b,c,d){if(va(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Oc(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Cc[h];if(!k||b(k))return;c[h]=!0;try{var l=Pc(k,b,c,d);e=Nc(l);Lc&&(e=Lc.We(e,l))}catch(D){d(h,D),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=2)e[Oc(a[m],
b,c,d)]=Oc(a[m+1],b,c,d);return e;case "template":e=[];for(var p=!1,q=1;q<a.length;q++){var t=Oc(a[q],b,c,d);Kc&&(p=p||t===Kc.kb);e.push(t)}return Kc&&p?Kc.Xe(e):e.join("");case "escape":e=Oc(a[1],b,c,d);if(Kc&&va(a[1])&&"macro"===a[1][0]&&Kc.Hf(a))return Kc.$f(e);e=String(e);for(var u=2;u<a.length;u++)gc[a[u]]&&(e=gc[a[u]](e));return e;case "tag":var v=a[1];if(!Fc[v])throw Error("Unable to resolve tag reference "+v+".");return e={kd:a[2],index:v};case "zb":var w={arg0:a[2],arg1:a[3],ignore_case:a[5]};
w["function"]=a[1];var C=Rc(w,b,c,d);a[4]&&(C=!C);return C;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Rc=function(a,b,c,d){try{return Jc(Pc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Sc=null,Wc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Sc=Tc(a,Uc()||function(){});for(var e=0;e<Dc.length;e++){var g=Dc[e],h=Vc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}var m=[];for(e=0;e<Fc.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Vc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Sc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Sc(e[c]);if(null===
d)return null;if(d)return!1}return!0};var Tc=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Rc(Ec[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Xc,Yc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Ge&&(h["fix_"+k]=!0),h.ld=h.ld||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=q.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,D:b.D,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||g.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],D:d,Za:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},t=function(){for(var b in l)if(l[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.ld&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.zd=function(){return this[this.length-1]};d.ic=function(a){var b=this.zd();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Ve=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Za=b.test(a.tagName)||a.Za);return a},g=t,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.ic("TABLE")?(a="<TBODY>"+a,m()):h.Mg&&c.test(e)&&d.Ve(e)?d.ic(e)?k():(a="</"+b.tagName+">"+a,m()):b.Za||d.push(b)},endTag:function(a){d.zd()?h.kf&&!d.ic(a.tagName)?k():d.pop():h.kf&&(g(),m())}},m=function(){var b=a,c=e(g());a=b;if(c&&
l[c.type])l[c.type](c)};t=function(){m();return e(g())}}();return{append:function(b){a+=b},eg:t,Sg:function(a){for(var b;(b=t())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Tg:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Zg="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Vg=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.$g=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.D){var d=a.D[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Za?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Lg=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Le=a.Le||!b[h]&&h;Xc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function g(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(u){var b=[];c(a,function(a){b.push(a)});return b}}var k={xe:a,ye:a,ze:a,Ae:a,He:a,Ie:function(a){return a},done:a,error:function(a){throw a;},ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var g=a.getAttribute(e);return b(g)?String(g):g}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,$a:d.defaultView||d.parentWindow,ya:d,yb:Xc("",{Ge:!0}),Xb:[b],qc:"",sc:d.createElement(b.nodeName),Xa:[],la:[]});a(this.sc,"proxyof",0)}g.prototype.write=function(){[].push.apply(this.la,arguments);for(var a;!this.tb&&this.la.length;)a=this.la.shift(),"function"===typeof a?this.Pe(a):this.Cc(a)};g.prototype.Pe=function(a){var b={type:"function",value:a.name||a.toString()};this.mc(b);a.call(this.$a,this.ya);this.Fd(b)};
g.prototype.Cc=function(a){this.yb.append(a);for(var b,c=[],d,e;(b=this.yb.eg())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Ag(c);d&&this.uf(b);e&&this.vf(b)};g.prototype.Ag=function(a){var b=this.Me(a);b.bd&&(b.cc=this.qc+b.bd,this.qc+=b.dg,this.sc.innerHTML=b.cc,this.xg())};g.prototype.Me=function(a){var b=this.Xb.length,d=[],e=[],g=[];c(a,function(a){d.push(a.text);if(a.D){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.D.id&&"ps-style"!==a.D.id&&g.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Za?" />":">"))}}else e.push(a.text),g.push("endTag"===a.type?a.text:"")});return{ah:a,raw:d.join(""),bd:e.join(""),dg:g.join("")}};g.prototype.xg=function(){for(var c,d=[this.sc];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.Xb[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");
g&&this.Xb[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};g.prototype.uf=function(a){var b=this.yb.clear();b&&this.la.unshift(b);a.src=a.D.src||a.D.Eg;a.src&&this.Xa.length?this.tb=a:this.mc(a);var c=this;this.zg(a,function(){c.Fd(a)})};g.prototype.vf=function(a){var b=this.yb.clear();b&&this.la.unshift(b);a.type=a.D.type||a.D.Fg||"text/css";this.Bg(a);b&&this.write()};g.prototype.Bg=function(a){var b=this.Oe(a);this.Ff(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ya.createTextNode(a.content)))};g.prototype.Oe=function(a){var b=this.ya.createElement(a.tagName);b.setAttribute("type",a.type);d(a.D,function(a,c){b.setAttribute(a,c)});return b};g.prototype.Ff=function(a){this.Cc('<span id="ps-style"/>');var b=this.ya.getElementById("ps-style");b.parentNode.replaceChild(a,b)};g.prototype.mc=function(a){a.Vf=this.la;this.la=[];this.Xa.unshift(a)};g.prototype.Fd=function(a){a!==this.Xa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Xa.shift(),this.write.apply(this,a.Vf),!this.Xa.length&&this.tb&&(this.mc(this.tb),this.tb=null))};g.prototype.zg=function(a,b){var c=this.Ne(a),d=this.pg(c),e=this.options.xe;a.src&&(c.src=a.src,this.ng(c,d?e:function(){b();e()}));try{this.Ef(c),a.src&&!d||b()}catch(F){this.options.error(F),b()}};g.prototype.Ne=function(a){var b=this.ya.createElement(a.tagName);d(a.D,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};g.prototype.Ef=function(a){this.Cc('<span id="ps-script"/>');
var b=this.ya.getElementById("ps-script");b.parentNode.replaceChild(a,b)};g.prototype.ng=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};g.prototype.pg=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.ig&&a.src&&a.hasAttribute("async"))};
return g}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.ye(),a.stream=c.apply(null,a),b.ze())}function c(c,g,k){function l(a){a=k.Ie(a);w.write(a);k.Ae(a)}w=new p(c,k);w.id=d++;w.name=k.name||w.id;var m=c.ownerDocument,q={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var t=w.$a.onerror||a;w.$a.onerror=function(a,b,c){k.error({Pg:a+
" - "+b+":"+c});t.apply(w.$a,arguments)};w.write(g,function(){e(m,q);w.$a.onerror=t;k.done();w=null;b()});return w}var d=0,m=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=g(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Ng?c[0]:c;var h=[c,d,e];c.Zf={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.He(h);m.push(h);w||b();return c.Zf},{streams:{},Rg:m,Gg:p})}();Yc=l.postscribe}})();var Zc={},$c=null;Zc.s="GTM-N98J";Zc.ob="as3";var ad="www.googletagmanager.com/gtm.js";var bd=ad,cd=null,dd=null,ed="//www.googletagmanager.com/a?id="+Zc.s+"&cv=649",fd={},gd={},hd=function(){var a=$c.sequence||0;$c.sequence=a+1;return a};var H=function(a,b,c,d){return(2===id()||d||"http:"!=z.location.protocol?a:b)+c},id=function(){var a=pb(),b;if(1===a)a:{var c=bd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=A.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var jd=!1;var J=function(){var a=function(a){return{toString:function(){return a}}};return{Gc:a("convert_case_to"),Hc:a("convert_false_to"),Ic:a("convert_null_to"),Jc:a("convert_true_to"),Kc:a("convert_undefined_to"),sa:a("function"),ne:a("instance_name"),oe:a("live_only"),pe:a("malware_disabled"),qe:a("once_per_event"),Yc:a("once_per_load"),Zc:a("setup_tags"),se:a("tag_id"),$c:a("teardown_tags")}}();var ld=new Ha,md={},pd={set:function(a,b){x(nd(a,b),md)},get:function(a){return od(a,2)},reset:function(){ld=new Ha;md={}}},od=function(a,b){return 2!=b?ld.get(a):qd(a)},qd=function(a,b,c){var d=a.split(".");return sd(d)},sd=function(a){for(var b=md,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var vd=function(a,b){ld.set(a,b);x(nd(a,b),md)},nd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var wd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var zd=function(a){var b=od("gtm.whitelist");var c=b&&Ma(Ea(b),xd),d=od("gtm.blacklist")||od("tagTypeBlacklist")||[];
wd.test(z.location&&z.location.hostname)&&(d=Ea(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Ma(Ea(d),yd),g={};return function(h){var k=h&&h[J.sa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=gd[k]||[],m=a(k);if(b){var p;if(p=m)a:{if(0>xa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>xa(c,l[q])){p=
!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var u;if(!(u=0<=xa(e,k)))a:{for(var v=l||[],w=new Ha,C=0;C<e.length;C++)w.set(e[C],!0);for(var D=0;D<v.length;D++)if(w.get(v[D])){u=!0;break a}u=!1}t=u}return g[k]=!m||t}};var Cd={We:function(a,b){b[J.Gc]&&"string"===typeof a&&(a=1==b[J.Gc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(J.Ic)&&null===a&&(a=b[J.Ic]);b.hasOwnProperty(J.Kc)&&void 0===a&&(a=b[J.Kc]);b.hasOwnProperty(J.Jc)&&!0===a&&(a=b[J.Jc]);b.hasOwnProperty(J.Hc)&&!1===a&&(a=b[J.Hc]);return a}};var Dd=function(a,b,c){this.Yf=a;this.Wf=b;this.Nf=c};fa(Dd,Error);Dd.prototype.getParameters=function(){return this.Wf};var Ed=function(a){var b=$c.zones;!b&&a&&(b=$c.zones=a());return b},Fd={active:!0,isWhitelisted:function(){return!0}};var Gd=!1,Hd=0,Id=[];function Jd(a){if(!Gd){var b=A.createEventObject,c="complete"==A.readyState,d="interactive"==A.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Gd=!0;for(var e=0;e<Id.length;e++)B(Id[e])}Id.push=function(){for(var a=0;a<arguments.length;a++)B(arguments[a]);return 0}}}function Kd(){if(!Gd&&140>Hd){Hd++;try{A.documentElement.doScroll("left"),Jd()}catch(a){z.setTimeout(Kd,50)}}}var Ld=function(a){Gd?a():Id.push(a)};var Md=function(){function a(a){return!ua(a)||0>a?0:a}if(!$c._li&&z.performance&&z.performance.timing){var b=z.performance.timing.navigationStart,c=ua(pd.get("gtm.start"))?pd.get("gtm.start"):0;$c._li={cst:a(c-b),cbt:a(cd-b)}}};var Nd=!1,Od=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]};var Pd=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(!z[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);z[b]=c}Md();return z[b]},Qd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Od();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Rd=!1;var Xd=function(a){};function Wd(a,b){b.containerId=Zc.s;return{type:a,value:b}};
var Yd=function(){return"&tc="+Fc.filter(function(a){return a}).length},Zd="0.005000">Math.random(),$d=function(){var a=0,b=0;return{If:function(){if(2>a)return!1;1E3<=Ga()-b&&(a=0);return 2<=a},gg:function(){1E3<=Ga()-b&&(a=0);a++;b=Ga()}}},ae="",be=function(){ae=[ed,"&v=3&t=t","&pid="+za(),"&rv="+Zc.ob].join("")},ce={},de="",ee=void 0,fe={},ge={},he=void 0,ie=null,je=1E3,ke=function(){var a=ee;return void 0===a?"":[ae,ce[a]?"":"&es=1",fe[a],Yd(),de,"&z=0"].join("")},le=function(){he&&
(z.clearTimeout(he),he=void 0);void 0===ee||ce[ee]&&!de||(ge[ee]||ie.If()||0>=je--?ge[ee]=!0:(ie.gg(),rb(ke()),ce[ee]=!0,de=""))},me=function(a,b,c){if(Zd&&!ge[a]&&b){a!==ee&&(le(),ee=a);var d=c+String(b[J.sa]||"").replace(/_/g,"");de=de?de+"."+d:"&tr="+d;he||(he=z.setTimeout(le,500));2022<=ke().length&&le()}};function ne(a,b,c,d,e,g){var h=Fc[a],k=oe(a,b,c,d,e,g);if(!k)return null;var l=Oc(h[J.Zc],g.fa,[],pe());if(l&&l.length){var m=l[0];k=ne(m.index,b,k,1===m.kd?e:k,e,g)}return k}
function oe(a,b,c,d,e,g){function h(){if(k[J.pe])d();else{var b=Pc(k,g.fa,[],l),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;me(g.id,Fc[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;me(g.id,Fc[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;me(g.id,k,"1");try{Nc(b)}catch(F){Xd(F);
me(g.id,k,"7");e||(e=!0,d())}}}var k=Fc[a];if(g.fa(k))return null;var l=pe(),m=Oc(k[J.$c],g.fa,[],l);if(m&&m.length){var p=m[0],q=ne(p.index,b,c,d,e,g);if(!q)return null;c=q;d=2===p.kd?e:q}if(k[J.Yc]||k[J.qe]){var t=k[J.Yc]?Hc:b,u=c,v=d;if(!t[a]){h=Ja(h);var w=qe(a,t,h);c=w.V;d=w.Aa}return function(){t[a](u,v)}}return h}
function qe(a,b,c){var d=[],e=[];b[a]=re(d,e,c);return{V:function(){b[a]=se;for(var c=0;c<d.length;c++)d[c]()},Aa:function(){b[a]=te;for(var c=0;c<e.length;c++)e[c]()}}}function re(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function se(a){a()}function te(a,b){b()}function pe(){return function(a,b){Xd(b)}};function ue(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ja(function(){b++;d&&b>=c&&a()})},Ee:function(){d=!0;b>=c&&a()}}}function ve(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Od,k=b.Od;g=h>k?1:h<k?-1:0}return g}
function we(a,b){if(!Zd)return;var c=function(a){var d=b.fa(Fc[a])?"3":"4",g=Oc(Fc[a][J.Zc],b.fa,[],ra);g&&g.length&&c(g[0].index);me(b.id,Fc[a],d);var h=Oc(Fc[a][J.$c],b.fa,[],ra);h&&h.length&&c(h[0].index)};c(a);}var xe=!1;function Uc(){return function(a,b){Xd(b)}};var ye=function(a,b){var c=Mc(a,b),d;for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Fc.push(c);return Fc.length-1};var O={Hb:"event_callback",Ib:"event_timeout"};var ze={},Be=function(a){var b=Zc.s;return function(){var c=arguments[0];if(c&&(ze[c]||ze.all)){var d=a.apply(void 0,Array.prototype.slice.call(arguments,0));ze[c]&&Ae(b,c,ze[c],d);ze.all&&Ae(b,c,ze.all,d)}}};
function Ae(a,b,c,d){for(var e=0;e<c.length;e++){var g=void 0,h="An in-page policy denied the permission request";try{g=c[e].call(void 0,a,b,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!g)throw new Dd(b,{},h);}};var Ce=/[A-Z]+/,De=/\s/,Ee=function(a){if(ta(a)&&(a=a.trim(),!De.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ce.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}};var Fe=null,Ge={},He={},Ie;function Je(){Fe=Fe||!$c.gtagRegistered;$c.gtagRegistered=!0;return Fe}var Ke=function(a,b){var c={event:a};b&&(c.eventModel=x(b),b[O.Hb]&&(c.eventCallback=b[O.Hb]),b[O.Ib]&&(c.eventTimeout=b[O.Ib]));return c};
function Le(a){if(void 0===He[a.id]){var b;switch(a.prefix){case "UA":b=ye("gtagua",{trackingId:a.id});break;case "AW":b=ye("gtagaw",{conversionId:a});break;case "DC":b=ye("gtagfl",{targetId:a.id});break;case "GF":b=ye("gtaggf",{conversionId:a});break;case "G":b=ye("get",{trackingId:a.id,isAutoTag:!0});break;case "HA":b=ye("gtagha",{conversionId:a});break;default:return}if(!Ie){var c=Mc("v",{name:"send_to",dataLayerVersion:2});Cc.push(c);Ie=["macro",Cc.length-1]}var d={arg0:Ie,arg1:a.id,ignore_case:!1};
d[J.sa]="_lc";Ec.push(d);var e={"if":[Ec.length-1],add:[b]};e["if"]&&(e.add||e.block)&&Dc.push(e);He[a.id]=b}}
var Ne={config:function(a){},
event:function(a){var b=a[1];if(ta(b)&&!(3<a.length)){var c;if(2<a.length){if(!Xa(a[2]))return;c=a[2]}var d=Ke(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js",
"gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];c&&ea(c)&&c.gtm&&c.gtm.fromContainer||(ze[b]||(ze[b]=[]),ze[b].push(c))}},set:function(a){var b;2==a.length&&Xa(a[1])?b=x(a[1]):3==a.length&&ta(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=x(b),b.event="gtag.set",b._clear=!0,b}},Me=Ja(function(){});var Oe=!1,Pe=[];function Qe(){if(!Oe){Oe=!0;for(var a=0;a<Pe.length;a++)B(Pe[a])}};var Re=[],Se=!1,Ye=function(a){var b=a.eventCallback,c=Ja(function(){sa(b)&&B(function(){b(Zc.s)})}),d=a.eventTimeout;d&&z.setTimeout(c,Number(d));return c},Ze=function(){for(var a=!1;!Se&&0<Re.length;){Se=!0;delete md.eventModel;var b=Re.shift();if(sa(b))try{b.call(pd)}catch(Te){}else if(va(b)){var c=b;if(ta(c[0])){var d=c[0].split("."),e=d.pop(),g=c.slice(1),h=od(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,g)}catch(Te){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&ta(b[0])){var l=Ne[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){Se=!1;continue}}var m;var p=void 0,q=b,t=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(t&&vd(p,void 0),vd(p,q[p]));var u=q.event;if(u){var v=q["gtm.uniqueEventId"];v||(v=hd(),q["gtm.uniqueEventId"]=v,vd("gtm.uniqueEventId",v));dd=u;var w;var C,D,F=q,I=F.event,P=F["gtm.uniqueEventId"],X=$c.zones;D=X?X.checkState(Zc.s,P):Fd;if(D.active){var G=Ye(F);c:{var S=D.isWhitelisted;
if("gtm.js"==I){if(xe){C=!1;break c}xe=!0}var Q=P,M=I;if(Zd&&!ge[Q]&&ee!==Q){le();ee=Q;de="";var K=fe,ha=Q,L,U=M;L=0===U.indexOf("gtm.")?encodeURIComponent(U):"*";K[ha]="&e="+L+"&eid="+Q;he||(he=z.setTimeout(le,500))}var ia=zd(S),V={id:P,name:I,callback:G||ra,fa:ia,Wa:[]};V.Wa=Wc(ia);for(var Ca,Sa=V,$a=ue(Sa.callback),Ad=[],Mb=[],xb=0;xb<Fc.length;xb++)if(Sa.Wa[xb]){var Ue=Fc[xb];var ec=$a.add();try{var Ve=ne(xb,Ad,ec,ec,ec,Sa);Ve?Mb.push({Od:xb,b:Qc(Ue),M:Ve}):(we(xb,Sa),ec())}catch(Te){ec()}}$a.Ee();Mb.sort(ve);for(var Bd=0;Bd<Mb.length;Bd++)Mb[Bd].M();Ca=0<Mb.length;if("gtm.js"===I||"gtm.sync"===I)d:{}if(Ca){for(var ih={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Gc=0;Gc<V.Wa.length;Gc++)if(V.Wa[Gc]){var Xe=Fc[Gc];if(Xe&&!ih[Xe[J.sa]]){C=!0;break c}}C=!1}else C=Ca}w=C?!0:!1}else w=!1;dd=null;m=w}else m=!1;a=m||a}Se=!1}return!a},$e=function(){var a=Ze();try{var b=z["dataLayer"].hide;if(b&&void 0!==b[Zc.s]&&b.end){b[Zc.s]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},af=function(){var a=mb("dataLayer",[]),b=mb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Id.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Pe.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Re.push.apply(Re,b);300<this.length;)this.shift();return Ze()};Re.push.apply(Re,a.slice(0));
B($e)};var bf={};bf.kb=new String("undefined");
var cf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===bf.kb?b:a[d]);return c.join("")}};cf.prototype.toString=function(){return this.resolve("undefined")};cf.prototype.valueOf=cf.prototype.toString;bf.te=cf;bf.Vb={};bf.Xe=function(a){return new cf(a)};var df={};bf.hg=function(a,b){var c=hd();df[c]=[a,b];return c};bf.fd=function(a){var b=a?0:1;return function(a){var c=df[a];if(c&&"function"===typeof c[b])c[b]();df[a]=void 0}};bf.Hf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};bf.$f=function(a){if(a===bf.kb)return a;var b=hd();bf.Vb[b]=a;return'google_tag_manager["'+Zc.s+'"].macro('+b+")"};bf.Mf=function(a,b,c){a instanceof bf.te&&(a=a.resolve(bf.hg(b,c)),b=ra);return{cc:a,V:b}};var ef=new Ha,ff=function(a,b){function c(a){var b=E(a),c=Fb(b,"protocol"),d=Fb(b,"host",!0),e=Fb(b,"port"),g=Fb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0};
function gf(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<e.length;g++)if(b[e[g]]){d=b[e[g]](c);break a}}catch(v){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=xa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var q=a.ignore_case?"i":void 0;try{var t=String(c)+q,u=ef.get(t);u||(u=new RegExp(c,q),ef.set(t,u));p=u.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ff(b,c)}return!1};var hf=function(){return!1};function jf(a,b){Ta(["key:!string","dataLayerVersion:?number"],arguments);this.J().assert("read_data_layer",a);return Za(od(a,b||2))}function kf(){return(new Date).getTime()}function lf(a){return Ba(Ya(a))}function mf(a){return null===a?"null":void 0===a?"undefined":a.toString()}function nf(a,b){Ta(["min:!number","max:!number"],arguments);return za(a,b)}
function of(a,b,c){Ta(["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Pa,e=!1,g=0;g<a.length();g++){var h=a.get(g);h instanceof Pa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var pf=function(){var a=new jb,b=Gb();hf()&&(b.injectScript=ra,b.injectHiddenIframe=ra);a.addAll({callLater:b.callLater,copyFromDataLayer:jf,copyFromWindow:b.copyFromWindow,createQueue:b.createQueue,createArgumentsQueue:b.createArgumentsQueue,encodeUri:b.encodeURI,encodeUriComponent:b.encodeURIComponent,generateRandom:nf,getTimestamp:kf,getUrl:b.getUrl,injectHiddenIframe:b.injectHiddenIframe,injectScript:b.injectScript,logToConsole:b.logToConsole,makeInteger:lf,makeString:mf,makeTableMap:of,queryPermission:b.queryPermission,
sendPixel:b.sendPixel,setInWindow:b.setInWindow});return function(b){return a.get(b)}};var qf;function rf(){var a=data.runtime||[];qf=new Ib;Bc=function(a,b){sf(b);var c=new Pa,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Za(b[d]));var e=qf.M([a,c]);e instanceof ja&&"return"===e.C&&(e=e.getData());return Ya(e)};Jc=gf;Hb(qf,pf());for(var b=0;b<a.length;b++){var c=a[b];if(!va(c)||3>c.length){if(0===c.length)continue;break}qf.M(c)}}function sf(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;sa(b)&&(a.gtmOnSuccess=function(){B(b)});sa(c)&&(a.gtmOnFailure=function(){B(c)})}
function tf(a){var b={},c=function(a){throw uf(a,{},"The requested permission is not configured.");};qf.Ea(c);qf.Fa(Be(function(){var a=arguments[0];return a&&b[a]?b[a].apply(void 0,Array.prototype.slice.call(arguments,0)):{}}));for(var d in a)if(a.hasOwnProperty(d)){var e=a[d],g=!1,h;for(h in e)if(e.hasOwnProperty(h)){g=!0;var k=vf(h,e[h]);qf.qb(d,h,k.assert);b[h]||(b[h]=k.ba)}g||qf.qb(d,"default",c)}}
function vf(a,b){var c=Mc(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=uf;return Nc(c)}function uf(a,b,c){return new Dd(a,b,c)};var wf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var xf=encodeURI,R=encodeURIComponent,yf=function(a,b){if(!a)return!1;var c=Fb(E(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var zf=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null},Af=function(){return!1};var Bf=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||ub(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Cf=function(a){$c.hasOwnProperty("autoEventsSettings")||($c.autoEventsSettings={});var b=$c.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Df=function(a,b,c,d){var e=Cf(a),g=Ia(e,b,d);e[b]=
c(g)},Ef=function(a,b,c){var d=Cf(a);return Ia(d,b,c)};var Gf=function(a,b){if(!Ff)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!A.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);return null},Hf=!1;
if(A.querySelectorAll)try{var If=A.querySelectorAll(":root");If&&1==If.length&&If[0]==A.documentElement&&(Hf=!0)}catch(a){}var Ff=Hf;var Jf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Mf=function(a,b,c,d){var e=Kf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Lf(e,function(a){return a.ef},b);if(1===e.length)return e[0].id;e=Lf(e,function(a){return a.Xf},c);return e[0]?e[0].id:void 0}},Pf=function(a,b,c,d,e,
g){c=c||"/";var h=d=d||"auto",k=c;if(Nf.test(document.location.hostname)||"/"===k&&Of.test(h))return!1;g&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toUTCString()+"; ");if("auto"===d){var p=!1,q;a:{var t=[],u=document.location.hostname.split(".");if(4===u.length){var v=u[u.length-1];if(parseInt(v,10).toString()===v){q=["none"];break a}}for(var w=u.length-2;0<=w;w--)t.push(u.slice(w).join("."));t.push("none");
q=t}for(var C=q,D=0;D<C.length&&!p;D++)p=Pf(a,b,c,C[D],e);return p}d&&"none"!==d&&(m+="domain="+d+";");var F=document.cookie;document.cookie=m;return F!=document.cookie||0<=Jf(a).indexOf(b)};function Lf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Kf(a,b){for(var c=[],d=Jf(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),ef:1*k[0]||1,Xf:1*k[1]||1}))}}return c}var Of=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Nf=/(^|\.)doubleclick\.net$/i;var Qf=function(){for(var a=kb.userAgent+(A.cookie||"")+(A.referrer||""),b=a.length,c=z.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},Tf=function(a,b,c,d){var e=Rf(b);return Mf(a,e,Sf(c),d)},Uf=function(a,b,c,d){var e=""+Rf(c),g=Sf(d);1<g&&(e+="-"+g);return[b,e,a].join(".")};
function Rf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function Sf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Vf=["1"],Wf={},Zf=function(a,b,c){var d=Xf(a);if(!Wf[d]&&!Yf(d,b,c)){var e=Qf(),g=Uf(e,"1",b,c);Pf(d,g,c,b,new Date(Ga()+7776E6));Yf(d,b,c)}};function Yf(a,b,c){var d=Tf(a,b,c,Vf);d&&(Wf[a]=d);return d}function Xf(a){return(a||"_gcl")+"_au"};function $f(){for(var a=ag,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function bg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var ag,cg,dg=function(a){ag=ag||bg();cg=cg||$f();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(p=64));b.push(ag[l],ag[m],ag[p],ag[q])}return b.join("")},eg=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=cg[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ag=ag||bg();cg=cg||
$f();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var fg;function gg(a,b){if(!a||b===A.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var hg=function(){var a=mb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ig=/(.*?)\*(.*?)\*(.*)/,jg=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,kg=/^(?:www\.|m\.|amp\.)+/,lg=/([^?#]+)(\?[^#]*)?(#.*)?/,mg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,og=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(dg(String(d))))}var e=b.join("*");return["1",ng(e),e].join("*")},ng=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,
Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}fg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},qg=function(){return function(a){var b=E(z.location.href),c=b.search.replace("?",""),d=Db(c,"_gl",!0)||"";a.query=pg(d)||{};var e=Fb(b,"fragment").match(mg);a.fragment=pg(e&&e[3]||"")||{}}},pg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c=ig.exec(a);if(c&&"1"===c[1]){var d=c[3],e;a:{for(var g=c[2],h=0;h<b;++h)if(g===ng(d,h)){e=!0;break a}e=!1}if(e){for(var k={},l=d?d.split("*"):[],m=0;m<l.length;m+=2)k[l[m]]=eg(l[m+1]);return k}}}}catch(p){}};
function rg(a,b,c){function d(a){var b=a,c=mg.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=lg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function sg(a,b,c){for(var d={},e={},g=hg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&gg(k.domains,b)&&(k.fragment?Ka(e,k.callback()):Ka(d,k.callback()))}if(La(d)){var l=og(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],q=!1,t=0;t<p.length;t++){var u=p[t];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var v=A.createElement("input");v.setAttribute("type","hidden");v.setAttribute("name","_gl");v.setAttribute("value",
l);a.appendChild(v)}}else if("post"===m){var w=rg(l,a.action);Bb.test(w)&&(a.action=w)}}}else tg(l,a,!1)}if(!c&&La(e)){var C=og(e);tg(C,a,!0)}}function tg(a,b,c){if(b.href){var d=rg(a,b.href,void 0===c?!1:c);Bb.test(d)&&(b.href=d)}}
var ug=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||sg(e,e.hostname,!1)}}catch(h){}},vg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=Fb(E(b.action),"host");sg(b,c,!0)}}catch(d){}},wg=function(a,b,c,d){var e=hg();e.init||(sb(A,"mousedown",ug),sb(A,"keyup",ug),sb(A,"submit",vg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};hg().decorators.push(g)},xg=function(){var a=A.referrer;if(!jg.test(a))return!1;var b=A.location.hostname,c=a.replace(jg,"").split("/"),d=c[1],e="s"===d?decodeURIComponent(c[2]):decodeURIComponent(d);return b.replace(kg,"")===e.replace(kg,"")},yg=function(a,b){return!1===a?!1:a||b||xg()};var zg=/^\w+$/,Ag=/^[\w-]+$/,Bg=/^~?[\w-]+$/,Cg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},Eg=function(a){var b=Jf(a,A.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return Dg(c)};function Fg(a){return a&&"string"==typeof a&&a.match(zg)?a:"_gcl"}
var Gg=function(a){if(a){if("string"==typeof a){var b=Fg(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:Fg(a.dc),aw:Fg(a.aw),gf:Fg(a.gf),ha:Fg(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},Ig=function(){var a=E(z.location.href),b=Fb(a,"query",!1,void 0,"gclid"),c=Fb(a,"query",!1,void 0,"gclsrc"),d=Fb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Db(e,"gclid");c=c||Db(e,"gclsrc")}return Hg(b,c,d)};
function Hg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Ag))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Jg(a,b){function c(a,b){var c=Kg(a,d);c&&Pf(c,b,g,e,k,!0)}b=b||{};var d=Gg(b.prefix),e=b.domain||"auto",g=b.path||"/",h=Ga(),k=new Date(h+7776E6),l=Math.round(h/1E3),m=function(a){return["GCL",l,a].join(".")};a.aw&&(!0===b.dh?c("aw",m("~"+a.aw[0])):c("aw",m(a.aw[0])));a.dc&&c("dc",m(a.dc[0]));a.gf&&c("gf",m(a.gf[0]));a.ha&&c("ha",m(a.ha[0]))}
var Kg=function(a,b){var c=Cg[a];if(void 0!==c){var d=b[a];if(void 0!==d)return d+c}},Lg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},Mg=function(a,b,c,d,e){if(va(b)){var g=Gg(e);wg(function(){for(var b={},c=0;c<a.length;++c){var d=Kg(a[c],g);if(d){var e=Jf(d,A.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},Dg=function(a){return a.filter(function(a){return Bg.test(a)})};var Ng=/^\d+\.fls\.doubleclick\.net$/;function Og(a){var b=E(z.location.href),c=Fb(b,"host",!1);if(c&&c.match(Ng)){var d=Fb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var Pg=function(a){var b=Og("gclaw");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.aw){var d=Ig().aw||[];if(0<d.length)return d}var e=Kg("aw",c);return e?Eg(e):[]},Qg=function(a){var b=Og("gcldc");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.dc){var d=Ig().dc||[];if(0<d.length)return d}var e=Kg("dc",c);return e?Eg(e):[]},Rg=function(a){var b=Gg(a);if("_gcl"==b.ha){var c=Ig().ha||[];if(0<c.length)return c}return Eg(b.ha+"_ha")},Sg=function(){var a=Og("gac");if(a)return decodeURIComponent(a);
for(var b=[],c=A.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var g=c[e].match(d);g&&b.push({xc:g[1],value:g[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].xc]||(h[b[k].xc]=[]),h[b[k].xc].push({timestamp:l[1],pf:l[2]}))}var m=[],p;for(p in h)if(h.hasOwnProperty(p)){for(var q=[],t=h[p],u=0;u<t.length;u++)q.push(t[u].pf);q=Dg(q);q.length&&m.push(p+":"+q.join(","))}return m.join(";")},Tg=function(a,
b,c){Zf(a,b,c);var d=Wf[Xf(a)],e=Ig().dc||[];if(d&&0<e.length){var g=$c.joined_au=$c.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk";m+="?gclid="+e[l]+"&auiddc="+d;Ab(m);k=!0}if(k){var p=Xf(a);if(Wf[p]){var q=Uf(Wf[p],"1",b,c);Pf(p,q,c,b,new Date(Ga()+7776E6))}g[h]=!0}}}};var Vg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ug()};function Ug(){if(3===Zc.ob.length)return"g";return"G"}function Wg(){return"w"}
var Xg=function(a){var b=Zc.s.split("-"),c=b[0].toUpperCase(),d=Vg[c]||"i",e=a&&"GTM"===c?b[1]:"";return(3===Zc.ob.length?"2"+Wg():"")+d+Zc.ob+e};
var Yg=function(a){return!(void 0===a||null===a||0===(a+"").length)},Zg=function(a,b){var c;if(2===b.K)return a("ord",za(1E11,1E13)),!0;if(3===b.K)return a("ord","1"),a("num",za(1E11,1E13)),!0;if(4===b.K)return Yg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.K)c="1";else if(6===b.K)c=b.Kd;else return!1;Yg(c)&&a("qty",c);Yg(b.Zb)&&a("cost",b.Zb);Yg(b.yc)&&a("ord",b.yc);return!0},$g=encodeURIComponent,ah=function(a,b){function c(a,b,c){g.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:$g(b)))}var d=a.ac,
e=a.protocol;e+=a.Ab?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+$g(d)+(";type="+$g(a.bc))+(";cat="+$g(a.Na));var g=a.Ze||{},h;for(h in g)g.hasOwnProperty(h)&&(e+=";"+$g(h)+"="+$g(g[h]+""));if(Zg(c,a)){Yg(a.Ac)&&c("u",a.Ac);Yg(a.tran)&&c("tran",a.tran);c("gtm",Xg());!1===a.Be&&c("npa","1");if(a.Yb){var k=Qg(a.xa);k&&k.length&&c("gcldc",k.join("."));var l=Pg(a.xa);l&&l.length&&c("gclaw",l.join("."));var m=Sg();m&&c("gac",m);
Zf(a.xa);var p=Wf[Xf(a.xa)];p&&c("auiddc",p);}Yg(a.nc)&&c("prd",a.nc,!0);for(var q in a.Ya)a.Ya.hasOwnProperty(q)&&c(q,a.Ya[q]);e+=b||"";Yg(a.xb)&&c("~oref",a.xb);a.Ab?qb(e+"?",a.V):rb(e+"?",a.V,a.Aa)}else B(a.Aa)};var dh=!!z.MutationObserver,eh=void 0,fh=function(a){if(!eh){var b=function(){var a=A.body;if(a)if(dh)(new MutationObserver(function(){for(var a=0;a<eh.length;a++)B(eh[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;sb(a,"DOMNodeInserted",function(){b||(b=!0,B(function(){b=!1;for(var a=0;a<eh.length;a++)B(eh[a])}))})}};eh=[];A.body?b():B(b)}eh.push(a)};var gh=/\./g,hh=/\*/g;
var th=function(){var a=A.body,b=A.documentElement||a&&a.parentElement,c,d;if(A.compatMode&&"BackCompat"!==A.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(a,b){return a&&b?Math.min(a,b):Math.max(a,b)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},uh=function(a){var b=th(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},vh=function(a){if(A.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!z.getComputedStyle)return!0;var c=z.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),g=Math.min(h,
g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=z.getComputedStyle(d,null))}return!1};
var Ch=function(a,b,c){function d(){var b=a();g+=e?(Ga()-e)*b.playbackRate/1E3:0;e=Ga()}var e=0,g=0;return{ub:function(e,k,l){var h=a(),p=h.jd,q=void 0!==l?Math.round(l):void 0!==k?Math.round(h.jd*k):Math.round(h.Ye),t=void 0!==k?Math.round(100*k):0>=p?0:Math.round(q/p*100),u=A.hidden?!1:.5<=uh(c);d();var v=Bf(c);v.event="gtm.video";v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=e;v["gtm.videoUrl"]=h.url;v["gtm.videoTitle"]=h.title;v["gtm.videoDuration"]=Math.round(p);v["gtm.videoCurrentTime"]=
Math.round(q);v["gtm.videoElapsedTime"]=Math.round(g);v["gtm.videoPercent"]=t;v["gtm.videoVisible"]=u;v["gtm.triggers"]=b;z["dataLayer"].push(v)},mg:function(){e=Ga()},Wb:function(){d()}}};var Dh=z.clearTimeout,Eh=z.setTimeout,T=function(a,b,c){if(hf()){b&&B(b)}else return ob(a,b,c)},Fh=function(){return z.location.href},Gh=function(a){return Fb(E(a),"fragment")},W=function(a,b){return od(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return z["dataLayer"].push(a)},Ih=function(a,b){z[a]=b},Y=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},Jh=function(a,
b,c){return Jf(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c){var d={prefix:a,path:b,domain:c},e=Ig();Jg(e,d)},Lh=function(a,b,c,d){var e=qg(),g=hg();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},k=g.data;k&&(Ka(h,k.query),Ka(h,k.fragment));for(var l=Gg(b),m=0;m<a.length;++m){var p=a[m];if(void 0!==Cg[p]){var q=Kg(p,l),t=h[q];if(t){var u=Math.min(Lg(t),Ga()),v;b:{for(var w=u,C=Jf(q,A.cookie),D=0;D<C.length;++D)if(Lg(C[D])>w){v=!0;break b}v=!1}v||
Pf(q,t,c,d,new Date(u+7776E6),!0)}}}var F={prefix:b,path:c,domain:d};Jg(Hg(h.gclid,h.gclsrc),F);},Mh=function(a,b,c,d,e){Mg(a,b,c,d,e);},Nh=function(a,b){if(hf()){b&&B(b)}else qb(a,b)},Oh=function(a){return!!Ef(a,"init",!1)},Ph=function(a){Cf(a).init=!0},Qh=function(a,b,c){var d=(void 0===c?
0:c)?"www.googletagmanager.com/gtag/js":bd;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));T(H("https://","http://",d))};
var Sh=bf.Mf;var ei=function(a,b,c){this.n=a;this.t=b;this.p=c},fi=function(){this.c=1;this.e=[];this.p=null};function gi(a){var b=$c,c=b.gss=b.gss||{};return c[a]=c[a]||new fi}var hi=function(a,b){gi(a).p=b},ii=function(a,b,c){var d=Math.floor(Ga()/1E3);gi(a).e.push(new ei(b,d,c))},ji=function(a){};var ri=window,si=document,ti=function(a){var b=ri._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ri["ga-disable-"+a])return!0;try{var c=ri.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Jf("AMP_TOKEN",si.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var yi=function(a){if(1===gi(a).c){gi(a).c=2;var b=encodeURIComponent(a);ob(("http:"!=z.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},zi=function(a,b){};var Z={a:{}};Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.b=0})(function(){return"649"})}();
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=Y("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;ah(a,c)}(function(a){Z.__flc=a;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=zf(b.vtp_customVariable||[],"key","value")||{},e={Na:b.vtp_activityTag,Yb:c,xa:b.vtp_conversionCookiePrefix||void 0,K:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,ac:b.vtp_advertiserId,bc:b.vtp_groupTag,Aa:b.vtp_gtmOnFailure,V:b.vtp_gtmOnSuccess,xb:b.vtp_useImageTag?void 0:
b.vtp_url,protocol:"",Ab:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,Ac:b.vtp_userVariable,Ya:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,Y("google_attr").build([zf(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Md();T("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=Y("google_trackConversion");if(sa(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=zf(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Xg()})||b()}else b()},b)})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return dd})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=W("gtm.referrer",1)||A.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fb(E(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eb(E(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Bf(b);d.event="gtm.click";Hh(d)}}(function(a){Z.__cl=a;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.b=0})(function(b){if(!Oh("cl")){var c=Y("document");sb(c,"click",a,!0);Ph("cl")}B(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.b=0})(function(a){return Jh(a.vtp_name,W("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.b=0})(function(a){return za(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:W("gtm.url",1))||Fh();var d=b[a("vtp_component")];return d&&"URL"!=d?Fb(E(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):Eb(E(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;x(zf(l.vtp_fieldsToSet,"fieldName","value"),e);x(zf(l.vtp_contentGroup,"index","group"),g);x(zf(l.vtp_dimension,"index","dimension"),h);x(zf(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=x(l);b=x(b,m)}x(zf(b.vtp_fieldsToSet,"fieldName","value"),e);x(zf(b.vtp_contentGroup,
"index","group"),g);x(zf(b.vtp_dimension,"index","dimension"),h);x(zf(b.vtp_metric,"index","metric"),k);var p=Pd(b.vtp_functionName),q="",t="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(t=b.vtp_trackerName,q=t+"."):(t="gtm"+hd(),q=t+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];p.apply(window,b)},C=function(a,b){return void 0===b?b:a(b)},D=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&w("set",a+c,b[c])},F=function(){},I=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var g=v[e]?Da(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},P={name:t};I(e,P,!0);p("create",b.vtp_trackingId||
c.trackingId,P);w("set","&gtm",Xg(!0));(function(a,c){void 0!==b[c]&&w("set",a,b[c])})("nonInteraction","vtp_nonInteraction");D("contentGroup",g);D("dimension",h);D("metric",k);var X={};I(e,X,!1)&&w("set",X);var G;b.vtp_enableLinkId&&w("require","linkid","linkid.js");w("set","hitCallback",function(){var a=e&&e.hitCallback;sa(a)&&
a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(w("require","ec","ec.js"),F());var S={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:C(String,b.vtp_eventLabel||c.label),eventValue:C(Ba,b.vtp_eventValue||c.value)};I(G,S,!1);w("send",S);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(w("require","ec","ec.js"),F());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Aa="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:Aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var N=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:N})}G?w("send","pageview",G):w("send","pageview");b.vtp_autoLinkDomains&&Qd(q,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var la=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(la="internal/"+la);a=!0;T(H("https:","http:","//www.google-analytics.com/"+la,e&&e.forceSSL),function(){var a=Od();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();




Z.a.ytl=["google"],function(){function a(){var b=Math.round(1E9*Math.random())+"";return vb(b)?a():b}function b(a,b){if(!a)return!1;for(var c=0;c<q.length;c++)if(0<=a.indexOf("//"+q[c]+"/"+b))return!0;return!1}function c(a){var b=-1!==a.indexOf("?")?"&":"?";if(-1<a.indexOf("origin="))return a+b+"enablejsapi=1";if(!u){var c=Y("document");u=c.location.protocol+"//"+c.location.hostname;c.location.port&&(u+=":"+c.location.port)}return a+b+"enablejsapi=1&origin="+encodeURIComponent(u)}function d(a,d){var e=
a.getAttribute("src");if(b(e,"embed/")){if(0<e.indexOf("enablejsapi=1"))return!0;if(d)return a.setAttribute("src",c(e)),!0}return!1}function e(b,c){if(!b.getAttribute("data-gtm-yt-inspected-"+c.zc)&&(b.setAttribute("data-gtm-yt-inspected-"+c.zc,"true"),d(b,c.md))){b.id||(b.id=a());var e=Y("YT"),g=e.get(b.id);g||(g=new e.Player(b.id));var k=h(g,c),l={},m;for(m in k)l.key=m,k.hasOwnProperty(l.key)&&g.addEventListener(l.key,function(a){return function(b){return k[a.key](b.data)}}(l)),l={key:l.key}}}
function g(a){B(function(){function b(){for(var b=c.getElementsByTagName("iframe"),d=b.length,g=0;g<d;g++)e(b[g],a)}var c=Y("document");b();fh(b)})}function h(a,b){var c,d;function e(){u=Ch(function(){return{url:V,title:Aa,jd:ia,Ye:a.getCurrentTime(),playbackRate:N}},b.zc,a.getIframe());ia=0;Aa=V="";N=1;return g}function g(c){switch(c){case t.PLAYING:ia=Math.round(a.getDuration());V=a.getVideoUrl();if(a.getVideoData){var d=a.getVideoData();Aa=d?d.title:""}N=a.getPlaybackRate();b.Se?u.ub("start"):
u.Wb();C=m(b.cg,b.bg,a.getDuration());return h(c);default:return g}}function h(){la=a.getCurrentTime();wa=(new Date).getTime();u.mg();v();return k}function k(c){var d;switch(c){case t.ENDED:return p(c);case t.PAUSED:d="pause";case t.BUFFERING:return d=1<Math.abs(((new Date).getTime()-wa)/1E3*N-(a.getCurrentTime()-la))?"seek":d||"buffering",a.getCurrentTime()&&(b.Re?u.ub(d):u.Wb()),w(),l;case t.UNSTARTED:return e(c);default:return k}}function l(a){switch(a){case t.ENDED:return p(a);case t.PLAYING:return h(a);
case t.UNSTARTED:return e(a);default:return l}}function p(){for(;d;){var a=c;Dh(d);a()}b.Qe&&u.ub("complete",1);return e(t.UNSTARTED)}function q(){}function w(){d&&(Dh(d),d=0,c=q)}function v(){if(C.length&&0!==N){var b=-1,e;do{e=C[0];if(e.ja>a.getDuration())return;b=(e.ja-a.getCurrentTime())/N;if(0>b&&(C.shift(),0===C.length))return}while(0>b);c=function(){d=0;c=q;0<C.length&&C[0].ja===e.ja&&(C.shift(),u.ub("progress",e.Hd,e.Ld));v()};d=Eh(c,1E3*b)}}var u,C=[],ia,V,Aa,N,la,wa,Ca=e(t.UNSTARTED);d=
0;c=q;return{onStateChange:function(a){Ca=Ca(a)},onPlaybackRateChange:function(b){la=a.getCurrentTime();wa=(new Date).getTime();u.Wb();N=b;w();v()}}}function k(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var g=parseInt(b[e],10);isNaN(g)||100<g||0>g||d.push(g/100)}d.sort(function(a,b){return a-b});return d}function l(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var g=parseInt(b[e],10);isNaN(g)||0>g||d.push(g)}d.sort(function(a,b){return a-b});return d}function m(a,b,c){var d=a.map(function(a){return{ja:a,
Ld:a,Hd:void 0}});if(!b.length)return d;var e=b.map(function(a){return{ja:a*c,Ld:void 0,Hd:a}});if(!d.length)return e;var g=d.concat(e);g.sort(function(a,b){return a.ja-b.ja});return g}function p(a){var c=!!a.vtp_captureStart,e=!!a.vtp_captureComplete,h=!!a.vtp_capturePause,m=k(a.vtp_progressThresholdsPercent+""),p=l(a.vtp_progressThresholdsTimeInSeconds+""),q=!!a.vtp_fixMissingApi;if(c||e||h||m.length||p.length){var t={Se:c,Qe:e,Re:h,bg:m,cg:p,md:q,zc:void 0===a.vtp_uniqueTriggerId?"":a.vtp_uniqueTriggerId},
w=Y("YT"),u=function(){g(t)};B(a.vtp_gtmOnSuccess);if(w)w.ready&&w.ready(u);else{var M=Y("onYouTubeIframeAPIReady");Ih("onYouTubeIframeAPIReady",function(){M&&M();u()});B(function(){for(var a=Y("document"),c=a.getElementsByTagName("script"),e=c.length,g=0;g<e;g++){var h=c[g].getAttribute("src");if(b(h,"iframe_api")||b(h,"player_api"))return}for(var k=a.getElementsByTagName("iframe"),l=k.length,m=0;m<l;m++)if(!v&&d(k[m],t.md)){T("https://www.youtube.com/iframe_api");v=!0;break}})}}else B(a.vtp_gtmOnSuccess)}
var q=["www.youtube.com","www.youtube-nocookie.com"],t={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},u,v=!1;Z.__ytl=p;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.b=0}();

Z.a.opt=["google"],function(){var a,b=function(b){var c={};if(b.vtp_gaSettings){var e=b.vtp_gaSettings;x(zf(e.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=x(e);b=x(b,g)||{}}x(zf(b.vtp_fieldsToSet,"fieldName","value"),c);var h=Pd(b.vtp_functionName);h.r=!0;var k="",l="";b.vtp_setTrackerName&&"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(l=b.vtp_trackerName,k=l+"."):(l="gtm"+hd(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,
alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},p={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(a,b,c){var d=0,e;for(e in a)if(a.hasOwnProperty(e)&&(c&&m[e]||!c&&
void 0===m[e])){var g=p[e]?Da(a[e]):a[e];"anonymizeIp"!==e||g||(g=void 0);b[e]=g;d++}return d},t={name:l};q(c,t,!0);var u={"&gtm":Xg(!0)};q(c,u,!1);var v=encodeURI(H("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));h("create",b.vtp_trackingId,t);h(k+"set",u);h(k+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(b.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,T(v,function(){return Od().loaded||b.vtp_gtmOnFailure()},
b.vtp_gtmOnFailure));var w=Y("dataLayer"),C=w&&w.hide;C&&C.end&&(C[b.vtp_optimizeContainerId]=!0)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.b=0}();Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.b=0})(function(){return Zc.s})}();
Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.g="hjtc";Z.__hjtc.h=!0;Z.__hjtc.b=0})(function(a){var b=a.vtp_hotjar_site_id;Ih("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Ih("_hjSettings",{hjid:b,hjsv:5});T("//static.hotjar.com/c/hotjar-"+R(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(a){Z.__gclidw=a;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.b=100})(function(b){B(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||xg())&&Lh(a,g,h,k));Kh(e,c,d);Tg(e,d,c);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Mh(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();

Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=W(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Fh()),d;d=va(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!yf(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return Fb(E(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return W("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=W("gtm.element",1),m=W("event",1),u=Number(new Date);a===l&&b===m&&c>u-250?k=d:(d=k=l?wb(l):"",a=l,b=m);c=u;return k||e.vtp_defaultValue;case "URL":var v;a:{var w=String(W("gtm.elementUrl",1)||e.vtp_defaultValue||""),C=E(w);switch(e.vtp_component||"URL"){case "URL":v=w;break a;case "IS_OUTBOUND":v=h(w,e);break a;default:v=Fb(C,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return v;case "ATTRIBUTE":var D;if(void 0===e.vtp_attribute)D=
g(e);else{var F=W("gtm.element",1);D=ub(F,e.vtp_attribute)||e.vtp_defaultValue||""}return D;default:return g(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.b=0})(function(a){var b=x(a),c=b;c[J.sa]=null;c[J.ne]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.ga=["google"],function(){var a,b,c=function(c){function d(a){var b=[].slice.call(arguments,0);b[0]=w+b[0];u.push(b)}function g(a,b){void 0!==c[b]&&d(a,c[b])}function h(a,b){void 0!==c[b]&&d(a,Number(c[b]))}function k(a,b){if(t(b))for(var c=0;c<b.length;c++)d(a,b[c])}function l(a,b,c){if(t(b))for(var e=0;e<b.length;e++){for(var g=[a],h=b[e],k=0;k<c.length;k++)g.push(h[c[k]]);d.apply(this,g)}}function m(a,b){void 0!==c[b]&&d("_set",a,c[b])}function p(a,b){return void 0===b?b:a(b)}function q(a,b){void 0!==
b&&(C+="&"+a+"="+b)}var t=va,u=Y("_gaq",[],!1),v=!1,w="";void 0==c.vtp_trackerName?w="gtm"+hd()+".":""!==c.vtp_trackerName&&(w=c.vtp_trackerName+".");g("_setAccount","vtp_webPropertyId");d("_set","gtmid",Xg(!0));

g("_setAllowLinker","vtp_allowLinker");g("_setAllowAnchor","vtp_allowAnchor");
g("_setAllowHash","vtp_allowHash");k("_addIgnoredRef",c.vtp_ignoredRef);k("_addIgnoredOrganic",c.vtp_ignoredOrganic);var C="";if(""!==
C){var D=function(a,b,c){for(var d=b.length-1;0<=d;d--){var e=b[d].split("=");if(e[0]===a)return e[1]||"1"}for(var g=c.length-1;0<=g;g--){var h=c[g].split("=");if(h[0]===a)return h[1]||"1"}},F=E(Fh()),I=Fb(F,"query").split("&"),P=c.vtp_allowAnchor?Fb(F,"fragment").split("&"):[];q("gclid",D("gclid",P,I));q("gclsrc",D("gclsrc",P,I));q("dclid",D("dclid",P,I));d("_set","campaignParams",C)}m("anonymizeIp","vtp_anonymizeIp");
c.vtp_enableInPageLinkId&&d("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");g("_setCampaignTrack",
"vtp_campaignTrack");g("_setClientInfo","vtp_clientInfo");g("_setDetectFlash","vtp_detectFlash");g("_setDetectTitle","vtp_detectTitle");

void 0!==c.vtp_forceSsl&&c.vtp_forceSsl&&(u.push(["_gat._forceSSL"]),v=!!c.vtp_forceSsl);d("_set","hitCallback",function(){sa(c.vtp_hitCallback)&&c.vtp_hitCallback();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){d("_trackEvent",String(c.vtp_eventCategory),String(c.vtp_eventAction),
p(String,c.vtp_eventLabel),p(Ba,c.vtp_eventValue),!!c.vtp_nonInteraction);}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("LINK"==c.vtp_trackType){}else if("LINK_BY_POST"==c.vtp_trackType){}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else d("_trackPageview");k("_cookiePathCopy",c.vtp_cookiePathCopy);
var L=function(){Y("_gat")||c.vtp_gtmOnFailure()};if(c.vtp_doubleClick)b||(b=!0,T(H("https","http","://stats.g.doubleclick.net/dc.js",v),L,c.vtp_gtmOnFailure));else if(!a){var U=c.vtp_useDebugVersion?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";a=!0;T(H("https://ssl","http://www",U,v),L,c.vtp_gtmOnFailure)}};Z.__ga=c;Z.__ga.g="ga";Z.__ga.h=!0;Z.__ga.b=0}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=Y("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){Md();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Xg()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?W(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&
(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();
Z.a.fsl=[],function(){function a(){var a=Y("document"),g=c(),h=HTMLFormElement.prototype.submit;sb(a,"click",function(a){var b=a.target;if(b&&(b=zb(b,["button","input"],100))&&("submit"==b.type||"image"==b.type)&&b.name&&ub(b,"value")){var c;(c=b.form?b.form.tagName?b.form:vb(b.form):zb(b,["form"],100))&&g.store(c,b)}},!1);sb(a,"submit",function(c){var e=c.target;if(!e)return c.returnValue;var k=c.defaultPrevented||!1===c.returnValue,p=!0;if(d(e,function(){if(p){var b=g.get(e),c;b&&(c=a.createElement("input"),
c.type="hidden",c.name=b.name,c.value=b.value,e.appendChild(c));h.call(e);c&&e.removeChild(c)}},k,b(e)&&!k))p=!1;else return k||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},!1);HTMLFormElement.prototype.submit=function(){var a=this,c=!0;d(a,function(){c&&h.call(a)},!1,b(a))&&(h.call(a),c=!1)}}function b(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0}function c(){var a=[],b=function(b){return ya(a,function(a){return a.form===b})};return{store:function(c,
d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(a){var c=b(a);return c?c.button:null}}}function d(a,b,c,d){var e=Ef("fsl",c?"nv.mwt":"mwt",0),g=Bf(a);g.event="gtm.formSubmit";var h=a.action;h&&h.tagName&&(h=a.cloneNode(!1).action);g["gtm.elementUrl"]=h;if(c){var k=Ef("fsl","nv.ids",[]).join(",");if(k)g["gtm.triggers"]=k;else return!0}else{var t=Ef("fsl","ids",[]).join(",");g["gtm.triggers"]=t}if(d&&e){if(!Hh(g,b,e))return!1}else Hh(g,function(){},e||2E3);return!0}(function(a){Z.__fsl=
a;Z.__fsl.g="fsl";Z.__fsl.h=!0;Z.__fsl.b=0})(function(b){var c=b.vtp_waitForTags,d=b.vtp_checkValidation,e=Number(b.vtp_waitForTagsTimeout);if(!e||0>=e)e=2E3;var l=b.vtp_uniqueTriggerId||"0";if(c){var m=function(a){return Math.max(e,a)};Df("fsl","mwt",m,0);d||Df("fsl","nv.mwt",m,0)}var p=function(a){a.push(l);return a};Df("fsl","ids",p,[]);d||Df("fsl","nv.ids",p,[]);Oh("fsl")||(a(),Ph("fsl"));B(b.vtp_gtmOnSuccess)})}();

Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.b=0})(function(a){B(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=A.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var p=d.getAttribute("data-gtmsrc");p&&(m.src=p,nb(m,e));b.insertBefore(m,null);p||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(t){B(h)}}}var b=function(a,b,c){Ld(function(){var d,e=$c;e.postscribe||(e.postscribe=Yc);d=e.postscribe;var g={done:b},m=A.createElement("div");m.style.display="none";m.style.visibility="hidden";A.body.appendChild(m);try{d(m,a,g)}catch(p){B(c)}})};var c=function(d){if(A.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.cc,k=g.V;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(A.body,yb(h),k,e)()}else Eh(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=0}();
Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.b=0})(function(a){var b=yb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}rb(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

Z.a.lcl=[],function(){function a(){var a=Y("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=zb(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=Ef("lcl",g?"nv.mwt":"mwt",0),m=Bf(e);m.event="gtm.linkClick";if(g){var p=Ef("lcl","nv.ids",[]).join(",");if(p)m["gtm.triggers"]=p;else return}else{var q=Ef("lcl","ids",[]).join(",");m["gtm.triggers"]=q}if(b(c,e,a)&&!g&&l&&e.href){var t=Y((e.target||
"_self").substring(1)),u=!0;if(Hh(m,function(){u&&t&&(t.location.href=e.href)},l))u=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Hh(m,function(){},l||2E3);return!0}};sb(a,"click",e,!1);sb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Eb(E(b.href)),l=Eb(E(e.location));return k!==l}return!0}(function(a){Z.__lcl=
a;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};Df("lcl","mwt",k,0);e||Df("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};Df("lcl","ids",l,[]);e||Df("lcl","nv.ids",l,[]);Oh("lcl")||(a(),Ph("lcl"));B(b.vtp_gtmOnSuccess)})}();


var Ai={};Ai.macro=function(a){if(bf.Vb.hasOwnProperty(a))return bf.Vb[a]},Ai.onHtmlSuccess=bf.fd(!0),Ai.onHtmlFailure=bf.fd(!1);Ai.dataLayer=pd;Ai.callback=function(a){fd.hasOwnProperty(a)&&sa(fd[a])&&fd[a]();delete fd[a]};Ai.Je=function(){$c[Zc.s]=Ai;gd=Z.a;Kc=Kc||bf;Lc=Cd};
Ai.Df=function(){$c=z.google_tag_manager=z.google_tag_manager||{};if($c[Zc.s]){var a=$c.zones;a&&a.unregisterChild(Zc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Cc.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Fc.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Ec.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},t=0;t<p.length;t++)q[p[t][0]]=Array.prototype.slice.call(p[t],1);Dc.push(q)}Ic=Z;var u=data.permissions||{};rf();tf(u);Ai.Je();
af();Gd=!1;Hd=0;if("interactive"==A.readyState&&!A.createEventObject||"complete"==A.readyState)Jd();else{sb(A,"DOMContentLoaded",Jd);sb(A,"readystatechange",Jd);if(A.createEventObject&&A.documentElement.doScroll){var v=!0;try{v=!z.frameElement}catch(C){}v&&Kd()}sb(z,"load",Jd)}Oe=!1;"complete"===A.readyState?Qe():sb(z,"load",Qe);
a:{if(!Zd)break a;be();ee=void 0;fe={};ce={};he=void 0;ge={};de="";ie=$d();z.setInterval(be,864E5);}cd=(new Date).getTime()}};Ai.Df();

})()
