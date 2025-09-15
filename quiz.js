// QUESTIONS
let questions1 = [
  {
    question:
      "Which of the following are challenges for customers related to landscape complexity?<br>There are two correct answers.",
    options: [
      "Adapting business processes.",
      "Responding to changing customer needs.",
      "Analytical flexibility.",
      "Macroeconomic unpredictability.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following are challenges for customers related to technological innovation?<br>There are two correct answers.",
    options: [
      "Fostering Agility",
      "Optimizing business processes",
      "Sustainability",
      "Increased customer demand",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following are challenges for customers related to business change?<br>There are three correct answers.",
    options: [
      "Disruption of supply chains.",
      "Changing customer preferences.",
      "Regulatory compliance",
      "Data and device security.",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following does SAP recommend that customers choose from when deciding which SAP S/4HANA Cloud implementation approach to take?<br>There are three correct answers.",
    options: [
      "New implementation",
      "System conversion",
      "System landscape transformation",
      "Lift and shift",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are dimensions of clean core?<br>There are three correct answers.",
    options: ["Procedures", "Extensibility", "Integrations", "Operations"],
    correct: [1, 2, 3],
  },
  {
    question:
      "Which of the following are benefits of clean core for users?<br>There are three correct answers.",
    options: [
      "Performance",
      "Cleansed data",
      "System reliability",
      "Enhanced collaboration",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are benefits of clean core for IT?<br>There are three correct answers.",
    options: [
      "Software stack",
      "Cloud native development",
      "Business process flexibility",
      "Cost savings",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are benefits of clean core for companies?<br>There are three correct answers.",
    options: [
      "Streamlined operations",
      "Improved decision-making",
      "Cost savings",
      "Business process flexibility",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are ways to get and keep operations clean?<br>There are two correct answers.",
    options: [
      "SAP Cloud Application Lifecycle Management",
      "SAP Solution Manager",
      "SAP S/4HANA Cloud Extensibility Model",
      "ABAP Cloud Development Model",
    ],
    correct: [0, 1],
  },
  {
    question:
      'Which of the following are definitions of "data" in the context of SAP S/4HANA Cloud?<br>There are three correct answers.',
    options: ["Configuration", "Master", "Transactional", "Structure"],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are tools that can be used during implementation projects to help achieve a clean core?<br>There are three correct answers.",
    options: [
      "SAP Data Migration Cockpit.",
      "SAP Fiori Custom Code Migration App.",
      "SAP Cloud Application Lifecycle Management.",
      "SAP BTP Cockpit",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are ways to get and keep integrations clean?<br>There are three correct answers.",
    options: [
      "Base integrations on standard APIs.",
      "Use SAP Integration Suite.",
      "Use SAP Event Mesh.",
      "Use SAP Application Extension Methodology.",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are ways to get and keep extensions clean?<br>There are three correct answers.",
    options: [
      "Use the three-tier model.",
      "Use released APIs only.",
      "Precisely understand the requirements.",
      "Avoid them.",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following are ways to get and keep business processes clean?<br>There are two correct answers.",
    options: [
      "Establish an organizational structure.",
      "Set up a business process hierarchy.",
      "Ensure data accuracy in the database.",
      "Use SAP Application Interface Framework.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following statements about the Composable Storefront are correct?<br>There are two correct answers.",
    options: [
      "It is a JavaScript storefront for SAP Commerce Cloud.",
      "It is an extensible, upgradable, and modern storefront.",
      "It contains one library.",
      "It is not a PWA-compliant storefront.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which tools are required during the development of the Composable Storefront?<br>There are three correct answers.",
    options: [
      "An IDE, such as Visual Studio Code",
      "ImageMagick",
      "Maven",
      "Angular CLI",
      "Node and package manager",
    ],
    correct: [0, 3, 4],
  },
  {
    question:
      "Which Web service API is used by the Composable Storefront to communicate with SAP Commerce Cloud?<br>Choose the correct answer.",
    options: ["SOAP", "ODATA", "RESTful", "JMS"],
    correct: [2],
  },
  {
    question:
      "Which statements about the Composable Storefront Routing are correct?<br>There are two correct answers.",
    options: [
      "It supports SEO.",
      "It cannot decide which information is included in the URL.",
      "It cannot keep legacy URLs working.",
      "It can maintain application state in URLs.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which of the following features are provided out-of-the-box by the Composable Storefront?<br>There are two correct answers.",
    options: [
      "Cancellations and Returns",
      "Warehouse Management",
      "Social Network Sharing",
      "Customer Interests",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What are the characteristics of a customization?<br>There are two correct answers.",
    options: [
      "It's part of a segment.",
      "Multiple customizations can apply at the same time.",
      "It defines a personalized search profile or promotion.",
      "It contains variations.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "How would you go about creating a variation in an existing customization?<br>There are two correct answers.",
    options: [
      "Use the SmartEdit Advanced Edit mode",
      "Use the SmartEdit Personalization mode",
      "Select the Customize tab to create the variation",
      "Select the Library tab to create the variation",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which of the following statements are true regarding the configuration of the customer experience calculation process?<br>There are two correct answers.",
    options: [
      "It is stored in a CxConfig database item.",
      "It is stored in a *-spring.xml configuration file.",
      "It can be associated with multiple BaseSites.",
      "It is specific to a single BaseSite.",
    ],
    correct: [0, 2],
  },
  {
    question:
      "How does a user become affiliated with a segment?<br>There are two correct answers.",
    options: [
      "Manual assignment in SmartEdit.",
      "Manual Assignment in Backoffice.",
      "Through integration with SAP Emarsys.",
      "Automatic assignment by a Commerce Customization.",
    ],
    correct: [1, 2],
  },
  {
    question:
      "How can the SAP Commerce Cloud shopping experience be personalized for customers?<br>There are two correct answers.",
    options: [
      "CMS Restrictions",
      "Segmentation",
      "Workflows",
      "GDPR",
      "Process Engine",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following statements about search operations based on Flexible Search are correct?<br>There are three correct answers.",
    options: [
      "Full-text searches from the storefront are translated into a flexible search query.",
      "Generic Search queries are always translated into flexible search queries.",
      "Requesting the product details page triggers a flexible search query.",
      "The Backoffice advanced search functionality is a more type-safe alternative to flexible search.",
      "Flexible search queries are always responded to from the database or cache, and never from Solr.",
    ],
    correct: [1, 2, 4],
  },
  {
    question:
      "Which of the following statements about the Search API are correct?<br>There are two correct answers.",
    options: [
      "A SpringBean for a FacetSearchListener is automatically recognized by the Commerce Server after it restarts.",
      "A Search Query can be created empty or prefilled.",
      "A Search Query is executed using the facetSearchService.",
      "The FacetSearchService.search() method returns a List",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which indexing operations are supported by Solr?<br>There are two correct answers.",
    options: ["ALL", "UPDATE", "PARTIAL_UPDATE", "REMOVE"],
    correct: [1, 2],
  },
  {
    question:
      'You configured an indexed property of type "text" in your Solr index. Which of the following statements about Solr searches for that property are correct?<br>There are two correct answers.',
    options: [
      "Solr can find a match only for the complete and case sensitive text.",
      "When the indexed property value changes, Solr can find it only after a full indexer operation.",
      "Solr can find a match for the complete and not case sensitive text.",
      "Solr can find even individual tokens of the text.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "Using SmartEdit, which settings are configurable in the Search Text Box?<br>There are three correct answers.",
    options: [
      "The sorting the results.",
      "The minimum characters to type before a request is triggered.",
      "The maximum amount of suggestions.",
      "Display product images.",
      "Bypass the cache for faster results.",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "Which of the following statements are correct regarding the merging principles of search profiles?<br>There are two correct answers.",
    options: [
      "For merging simple search profiles, the first stage is the internal merging following the category hierarchy.",
      "Merging order is determined by the list order in the activation set.",
      "Merging order is determined by priority in personalization variations.",
      "All search profiles participate in the merging process.",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which of the following statements are correct about personalized search profiles?<br>There are two correct answers.",
    options: [
      "A personalized search profile must be associated with an active variation.",
      "A personalized search profile must be added to an activation set.",
      "Within one customization, the search profiles associated with different variations cannot be merged.",
      "Merging will not happen for multiple search profiles associated with the same variation.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What configurations are possible in a Search Profile?<br>There are three correct answers.",
    options: [
      "Facets",
      "Boost Rules and Boost Items.",
      "Categories",
      "Sorts",
      "Variations",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "Which search profile types are supported in the Adaptive Search module?<br>There are two correct answers.",
    options: [
      "Multi-Dimensional Search Profile",
      "Simple Search Profile",
      "Classification Search Profile",
      "Category-Aware Search Profile",
    ],
    correct: [1, 3],
  },
  {
    question:
      "In which Backoffice cockpit can you create search profiles?<br>There are two correct answers.",
    options: [
      "Product Cockpit",
      "Administration Cockpit",
      "Customer Support Cockpit",
      "Adaptive Search Cockpit",
    ],
    correct: [1, 3],
  },
  {
    question:
      "How can you activate a Search Profile?<br>There are two correct answers.",
    options: [
      "Add it to an activation set.",
      "Set active property to true in the search profile.",
      "Associate it with a user group.",
      "Associate it with an active variation/target group.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which of the following properties are mandatory for a promotion rule to be active on a storefront?<br>There are three correct answers.",
    options: ["Rule Group", "Web site", "Priority", "Code", "Description"],
    correct: [1, 2, 3],
  },
  {
    question:
      "You must create two promotions with the requirement that if promotion A is fired, promotion B must not be fired. What do you do?<br>There are two correct answers.",
    options: [
      "Make sure promotion A’s priority value is higher than promotion B.",
      "Assign the promotions to two different Web site groups.",
      "Assign the promotions into two different rule groups with the exclusivity property set to true.",
      "Assign the promotions into one rule group with the exclusivity property set to true.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "After a promotion rule is created in Backoffice, in what format is the corresponding source rule stored in the database?<br>Choose the correct answer.",
    options: ["JSON", "XML", "ImpEx", "DATA"],
    correct: [0],
  },
  {
    question:
      "Which of the following rule-aware objects (RAOs, that is, conditions or actions) are provided in the promotion module out of the box?<br>There are three correct answers.",
    options: [
      "Product RAO",
      "Web site RAO",
      "Newsletter RAO",
      "Category RAO",
      "Customer RAO",
    ],
    correct: [0, 3, 4],
  },
  {
    question:
      "What are the typical steps to implement a new condition type before enabling it in the rule builder in Backoffice?<br>There are three correct answers.",
    options: [
      "Create or extend the related RAO.",
      "Implement a condition evaluator.",
      "Implement a condition converter.",
      "Implement a RAO populator.",
      "Implement a condition translator.",
    ],
    correct: [0, 3, 4],
  },
  {
    question:
      "What can you configure in a Multi-Code Coupon in Backoffice?<br>There are two correct answers.",
    options: [
      "Maximum redemptions per customer.",
      "The start/end dates when the coupon is active.",
      "The configuration for the coupon code generation.",
      "The coupon code to be redeemed directly.",
    ],
    correct: [1, 2],
  },
  {
    question:
      "If you want to redeem a multi-code coupon on the storefront, what typical steps must you perform?<br>There are two correct answers.",
    options: [
      "Configure the redeemable unique coupon code in Backoffice and apply it on the storefront.",
      "Define an action in the coupon instance in Backoffice.",
      "Activate the coupon directly, with or without a validity period.",
      "Publish a promotion that contains the coupon as a condition.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "What are the out-of-the-box conditions that you can combine with a coupon in a promotion?<br>There are two correct answers.",
    options: [
      "A customer who belongs to a user group.",
      "A customer consents to receiving the newsletter with campaign information.",
      "A customer registers an interest in a specific product.",
      "A customer buys a product for a specific category.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What factors must you consider when you use a customer coupon?<br>There are two correct answers.",
    options: [
      "It can be activated for anonymous and registered customers.",
      "It is automatically redeemed once activated for a certain customer.",
      "It can be activated for a customer through accessing a claiming URL.",
      "It can be activated for a customer by a direct assignment through ASM.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "What can you configure in a Single-Code Coupon in Backoffice?<br>There are two correct answers.",
    options: [
      "Maximum redemptions per customer.",
      "Discounted percentage value granted by the coupon.",
      "Eligible users or user groups of the coupon.",
      "Maximum total redemptions.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "We can use @CacheControl to annotate the controller class for managing caching. Which of the following directive-descriptions are correct when using the annotation?<br>There are two correct answers.",
    options: [
      "PUBLIC - Any cache MAY store the response, unless the response is deemed noncacheable or is only cacheable within a private cache.",
      "PRIVATE - The response MUST NOT be used to satisfy a subsequent request without successful validation on the origin server.",
      "NO_STORE - A cache MUST NOT store any part of either the immediate request or response.",
      "MUST_VALIDATE - Once it has become stale, a cache MUST NOT use the response to satisfy subsequent requests without successful validation on the origin server.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "What are the major features and benefits of the OCC module?<br>There are two correct answers.",
    options: [
      "It allows Commerce customers to enable touch points and channels without lengthy and costly IT cycles.",
      "It enables reusing commerce processes and data.",
      "It enables commerce to send data to external systems through RESTful APIs.",
      "Its RESTful APIs can be configured in runtime and extended through Backoffice UI.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What should we pay attention to when working with an OCC extension?<br>There are two correct answers.",
    options: [
      'The name of the extension must end with "occ."',
      "After implementing a new service, there is no need to register it in -spring.xml as the spring context is automatically filled.",
      "We must work in the src folder to implement a web service controller.",
      "We must work in the web/src folder to implement a web service controller.",
    ],
    correct: [0, 2],
  },
  {
    question:
      "How do we use the access control roles to restrict access to commerce process or data via OCC customization?<br>Choose the correct answer.",
    options: [
      "They are specified in the spring-security.xml file against unauthorized REST requests.",
      "Roles-related user groups are configured to enable/disable type-based access rights.",
      "They are annotated via @Secured to methods in OCC controllers.",
      "-spring.xml can be used to relate access control roles to restrict method invocation of spring resources.",
    ],
    correct: [2],
  },
  {
    question:
      "What are the typical approaches to define data mappings from a DTO/Model to a WsDTO?<br>There are two correct answers.",
    options: [
      "Declare field mappings in a web context spring XML file.",
      "Declare field mappings in the -beans.xml to refer to the WsDTO.",
      "Implement a custom Data Mapper and register it in -spring.xml file.",
      "Implement a custom Data populator and append it to an existing Data Mapper in",
    ],
    correct: [0, 2],
  },
  {
    question:
      "How can SAP Commerce Integration API Module integrations be configured?<br>Choose the correct answer.",
    options: [
      "Declaring Spring Beans in *-spring.xml files.",
      "Writing custom Java code in a custom extension.",
      "Using the Integration API Cockpit in the Backoffice",
      "Creating special structures of items through *-items.xml files.",
    ],
    correct: [2],
  },
  {
    question:
      "Where can the JDBC logging be enabled or disabled?<br>There are three correct answers.",
    options: [
      "Via the property db.log.active in a .properties file.",
      "In the global spring context, configure the JDBC Logging bean.",
      'In Java code: de.hybris.platform.util.Config.setParameter("db.log.active", "true").',
      "In SAP Commerce Administration Console, Monitoring > Database > JDBC logging.",
      "In Backoffice, configure the JDBC Logging item.",
    ],
    correct: [0, 2, 3],
  },
  {
    question:
      "From version 2211 onwards, SAP Commerce Cloud is and will be versionless. What does that mean?<br>There are three correct answers.",
    options: [
      "We will only have 2211 version from now on and this major version number will not be changed.",
      "We will have a yearly update, with a new release of 2211.x, where x is an incremental number.",
      "We will have a monthly update, with a new release of 2211.x, where x is an incremental number.",
      "Every update can contain patches, bug fixes, security updates, new features, and innovations.",
      "Every update will be cumulative, backward compatible, and supported for 2 years.",
    ],
    correct: [0, 2, 3],
  },
  {
    question:
      "Where can more resources (regarding SAP Commerce Cloud) be found?<br>There are three correct answers.",
    options: [
      "Backoffice",
      'https://help.sap.com/ (then, narrow the results by searching for "SAP Commerce Cloud")',
      "https://community.sap.com/",
      "https://learning.sap.com",
      "HAC (SAP Commerce administration console)",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "To assure GDPR compliance in SAP Commerce Cloud, which of the following features are implemented and provided out of the box?<br>There are two correct answers.",
    options: [
      "All consent templates and related consents for each customer can be managed directly in Backoffice.",
      "A customer can close their account if necessary, and all the customer data is deleted immediately.",
      "A personal report (also knows as an audit report) can be generated per request but must be manually removed afterwards.",
      'The sample Composable Storefront, for example, Spartacus Electronics Store, enables a customer to manage his/her consents under the "My Account" page.',
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which of the following public code repositories are supported?<br>There are three correct answers.",
    options: ["SourceForge", "GitHub", "AWS CodeCommit", "Bitbucket", "GitLab"],
    correct: [1, 3, 4],
  },
  {
    question:
      "How does the Cloud Portal determine the version of SAP Commerce Cloud to use when building your project?<br>Choose the correct answer.",
    options: [
      "You can specify a version without providing the patch number",
      "You must provide the desired patch number when specifying the version",
      "The latest version of SAP Commerce Cloud is automatically used",
      "The SAP Cloud Portal builder consults your SLA agreement to determine the version to use",
    ],
    correct: [0],
  },
  {
    question:
      "What are the capabilities of the SAP Cloud Portal?<br>There are three correct answers.",
    options: [
      "Monitor performance",
      "Create and restore snapshots",
      "Generate SSL certificates",
      "Deploy builds to provisioned environments",
      "Provision environments for deployment",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "What information do you need to provide when deploying a build?<br>There are three correct answers.",
    options: [
      "The deployment type",
      "The target environment",
      "The deployment mode",
      "The data access credentials",
      "The platform update mode",
    ],
    correct: [1, 2, 4],
  },
  {
    question:
      "How does the builder in SAP Cloud Portal identify what to incorporate in a build?<br>Choose the correct answer.",
    options: [
      "It looks at the local.properties file.",
      "It looks at the manifest.xml file.",
      "It looks at the manifest.json file.",
      "It looks at the manifest.mf file.",
      "It looks at the localextensions.xml file.",
    ],
    correct: [2],
  },
  {
    question:
      "What does Spring Security manage in SAP Commerce Cloud?<br>There are three correct answers.",
    options: [
      "Authentication and authorization",
      "Access to certain item types",
      "Access to certain pages of the storefront",
      "Price restriction",
      "Remember me service",
    ],
    correct: [0, 2, 4],
  },
  {
    question:
      "What does an item-based restriction consist of?<br>There are three correct answers.",
    options: [
      "The items the restriction is applied on ",
      "The principal (user or user group) the restriction will be applied on",
      "The flexible search query the restriction uses to restrict the items",
      "The condition the restriction should fulfill",
      "The item type the restriction is related to",
    ],
    correct: [1, 3, 4],
  },
  {
    question:
      "Which of the following principals can be removed without a problem?<br>There are two correct answers.",
    options: [
      "anonymous",
      "admingroup",
      "admin",
      "productmanager",
      "cmsmanager",
    ],
    correct: [3, 4],
  },
  {
    question:
      "What are the out-of-the-box password security policies in SAP Commerce Cloud?<br>There are two correct answers.",
    options: [
      "regex – uses regular expression to define the formation and length of passwords",
      "lock – limits password attempts and applies lock-out",
      "blacklist – defines a list of passwords that can’t be used ",
      "duration – defines the period passwords need to be updated",
    ],
    correct: [0, 2],
  },
  {
    question:
      "About the security mechanism: type-based access rights, which of the following statements are correct?<br>There are two correct answers.",
    options: [
      "It can grant access to individual attributes of types",
      "It can grant access to some items but deny some other items of the same type",
      "It is effective out-of-the-box in backoffice, integration API and Service Layer API",
      "It can be granted to a user or user group",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which methods need to be coded when implementing TransactionAwareEvent?<br>There are two correct answers.",
    options: [
      "canPublish()",
      "publishOnCommitOnly()",
      "getId()",
      "publishEvent()",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which method needs to be overridden when implementing the ClusterAwareEvent interface<br>Choose the correct answer.",
    options: [
      "registerEventListener()",
      "getId()",
      "canPublish()",
      "publishOnCommitOnly()",
    ],
    correct: [2],
  },
  {
    question:
      "Which of the following statements about event systems are correct?<br>There are two correct answers.",
    options: [
      "A software component acting as a source publishes an event that is received by registered event listeners.",
      "Events can be published only locally.",
      "When publishing an event, it's possible to directly control this event to be sent to a certain predefined event listener.",
      "The SAP Commerce Event System is based on the Spring event system",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which Service is used to publish an event?<br>Choose the correct answer.",
    options: [
      "EventService",
      "ModelService",
      "FlexibleSearchService",
      "ImportService",
    ],
    correct: [0],
  },
  {
    question:
      "Which of the following statements about asynchronous events are correct?<br>There are two correct answers.",
    options: [
      "Events are processed asynchronously by default",
      "When configuring the PlatformClusterEventSender Spring bean, all non-cluster-aware events will be sent asynchronously.",
      "Network traffic occurs for each event implementing ClusterAwareEvent.",
      "Implementing ClusterAwareEvent is the only way to handle events asynchronously",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which of the following statements about the process engine are correct?<br>There are two correct answers.",
    options: [
      "The most important process engine node type is the end node.",
      "Action nodes need to perform concrete business logic and/or call other services.",
      "A process structure can be defined in a BPM tool and imported directly into SAP Commerce Cloud.",
      "The SAP Commerce Process Engine extension allows you to model, support, and monitor business processes.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "What should you consider when implementing a business process template?<br>There are two correct answers.",
    options: [
      "For each action node, an action implementation class should be defined.",
      "For each node in the process definition XML file, we need to configure a corresponding Spring bean.",
      "There is no way to share data among different actions belonging to a particular process.",
      "Wait node will let the current business process wait until a specific event is generated.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which of the following node types are predefined in the business process engine?<br>There are two correct answers.",
    options: ["Action node", "End node", "Start node", "Message node"],
    correct: [0, 1],
  },
  {
    question:
      "Which of these statements correctly describe actions in the process engine?<br>There are two correct answers.",
    options: [
      "Actions are performed asynchronously by default.",
      "Some action implementations return at least one action result, but some don’t",
      "Actions implementation must be declared as Spring beans in  my-extension-spring.xml",
      "If an action cannot perform or complete its work due to a temporary reason, it can be processed again later by throwing a RetryLaterException exception or returning Action.RETRY_RETURN_CODE",
    ],
    correct: [2, 3],
  },
  {
    question:
      "Which service is used to create and start a business process based on a specific business process template?<br>Choose the correct answer.",
    options: [
      "ImportService",
      "BusinessProcessService",
      "WorkflowTemplateService",
      "FlexibleSearchService",
    ],
    correct: [1],
  },
  {
    question:
      "Which Fraud Detection symptoms exist out-of-the-box? <br>There are three correct answers.",
    options: [
      "First Time Order Symptom",
      "Order Entry Symptom",
      "Order Threshold Symptom",
      "Order List Symptom",
      "Scripted Symptom – allows a Groovy script to dynamically define, apply, and evaluate a symptom",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following functionalities are provided by the basecommerce extension?<br>There are three correct answers.",
    options: [
      "Order splitting and Fraud detection",
      "Payment integration",
      "Order history and Order versioning",
      "Customer support through ASM (Assisted Service Module)",
      "Definition of typical processes: order-process.xml, consignment-process.xml, return-process.xml",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following statements regarding the out-of-the-box support for Fraud Detection are correct?<br>There are three correct answers.",
    options: [
      "SAP Commerce provides extensible services for performing internal and/or external fraud checks.",
      "When the points gathered by matching symptoms exceed the first threshold, a manual order check by a CSA (Customer Support Agent) becomes necessary.",
      "Each Fraud symptom has an assigned point value, and all applicable points are summed up.",
      "Symptoms as well as their point values are fixed.",
      "When the points gathered by matching symptoms exceeds the second threshold, the OOTB behavior is to notify the customer and cancel the order automatically.",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following statements regarding the Payment Service Provider (PSP) integration in SAP Commerce Cloud are correct?<br>There are two correct answers.",
    options: [
      "Existing interfaces allow you to integrate external PSPs into SAP Commerce, but none of them are already implemented out-of-the-box.",
      "PSP integration is freely configurable in the order flow. For example, before and/or after the Fraud check.",
      "It’s not possible to integrate more than one PSP in SAP Commerce Cloud at the same time.",
      "Several Payment Service Providers are already fully integrated with SAP Commerce out of the box.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What does Order Splitting in the basecommerce extension provide out-of-the-box?<br>There are two correct answers.",
    options: [
      "Order Splitting allows orders to be split into several consignments.",
      "The strategiesList stores a list of strategies for splitting orders (configured as Spring XML declaration). It also allows the addition of custom splitting strategies.",
      "SplitByDeliveryMode and SplitByWarehouse are the only supported OOTB splitting strategies.",
      "An order containing only one order entry cannot be split further.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What is the essential setting needed to run a CronJob item?<br>Choose the correct answer.",
    options: [
      "A trigger that defines the schedule of the CronJob",
      "An email template to generate the notification email after the CronJob is executed",
      "Either a node ID or a node group to specify on which server the CronJob is supposed to run",
      "A User assigned to the session context where the CronJob will be running",
    ],
    correct: [3],
  },
  {
    question:
      "What is the CronJob functionality typically used for?<br>There are three correct answers.",
    options: [
      "Backing up customer data",
      "Executing step-by-step business logic",
      "Synchronizing product or content catalog versions",
      "Notifying about new order placement",
      "Importing or exporting data from and to external systems",
    ],
    correct: [0, 2, 4],
  },
  {
    question:
      "What is the correct order of the steps needed to implement a new CronJob?<br>Choose the correct answer.",
    options: [
      "Define the logic, create ServiceLayerJob, register a spring bean, create a CronJob",
      "Define the logic, register a spring bean, create ServiceLayerJob, create a CronJob",
      "Create ServiceLayerJob, define the logic, register a spring bean, create a CronJob",
      "Create ServiceLayerJob, register a spring bean, define the logic, create a CronJob",
    ],
    correct: [1],
  },
  {
    question:
      "What are the key components that interact with each other to support the execution of a CronJob?<br>There are three correct answers.",
    options: [
      "Job, defines what to do",
      "Task, contains the business logic to execute",
      "Trigger, schedules when a CronJob is started",
      "CronJob, contains the runtime information, like logs, status, and results",
      "Event, triggers a CronJob to run",
    ],
    correct: [0, 2, 3],
  },
  {
    question:
      "What are the out-of-the-box ways to start a CronJob directly?<br>There are three correct answers.",
    options: [
      "Click on the action icon of a CronJob in Backoffice",
      "Execute ant runcronjob.",
      "Invoke a RESTful web service via OCC (Omni Commerce Connect).",
      "Set the activation time of a CronJob item in ImpEx.",
      "Use cronJobService from the API.",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "There are different ways to define a workflow template. Which of the following is the most efficient way?<br>Choose the correct answer.",
    options: [
      "Visual Workflow Template Designer",
      "Workflow workspace in Backoffice",
      "WorklflowTemplateService",
      "WorkflowService",
    ],
    correct: [0],
  },
  {
    question:
      "What are the key features of the Workflow module?<br>There are three correct answers.",
    options: [
      "A workflow template can be defined in a business process management (BPM) tool.",
      "You can start a workflow the same way as starting a cronjob.",
      "You can get real-time notifications via Email after every action is processed.",
      "A workflow can have task-relevant attachments.",
      "Backoffice users can make comments when performing workflow tasks.",
    ],
    correct: [1, 3, 4],
  },
  {
    question:
      "A workflow can be started through APIs in the Workflow Module. Which of the following statements regarding the related API services are correct?<br>There are two correct answers.",
    options: [
      "WorkflowProcessingService can be used to start a workflow.",
      "WorkflowService can be used to start a workflow.",
      "WorkflowProcessingService can be used to create a workflow.",
      "WorkflowService can be used to create a workflow.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Workflow is a subtype of which item type definition in the type system?<br>Choose the correct answer.",
    options: ["Job", "CronJob", "WorkflowTemplate", "ServiceLayerJob"],
    correct: [1],
  },
  {
    question:
      "Activation scripts can be used to start a workflow automatically. Which of the following situations can trigger the evaluation of activation scripts?<br>There are three correct answers.",
    options: [
      "When an item is loaded.",
      "When an item is saved.",
      "When an item is removed.",
      "When an item is created.",
      "When an item is duplicated/cloned.",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "What is the Commerce Validation Framework capable of?<br>There are two correct answers.",
    options: [
      "Guaranteeing CORRECT VALUES for attributes",
      "Rejecting values that violate certain rules",
      "Blocking a user's ability to save an object which contains an INVALID attribute value",
      "Automatically generating a Validator class implementation in Java",
    ],
    correct: [1, 2],
  },
  {
    question:
      "What are the necessary steps to follow when adding a new validation constraint using the Backoffice Administration Cockpit?<br>There are two correct answers.",
    options: [
      "Creating a Constraint item (instance)",
      "Reloading the validation engine at runtime",
      "Stopping and restarting the server",
      "Editing a *-spring.xml file",
      "Rebuilding the platform",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What tools/mechanisms are available for creating/editing a new constraint?<br>There are two correct answers.",
    options: [
      "Backoffice Administration Cockpit",
      "Backoffice Product Cockpit",
      "ImpEx",
      "SmartEdit",
    ],
    correct: [0, 2],
  },
  {
    question:
      "What essential information is required when creating a new constraint?<br>There are three correct answers.",
    options: [
      "The name of the underlying validator Annotation to which the constraint is linked",
      "The constraint TYPE",
      "Related constraint parameters (For example: min/max, range, or threshold values)",
      "The type and/or attribute being constrained",
      "A custom error or warning message",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "What are the possible severity levels for a constraint?<br>There are two correct answers.",
    options: ["Error", "Warning", "Custom", "Blocker"],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following statements regarding page templates, pages, and components in SAP Commerce Cloud are correct?<br>There are two correct answers.",
    options: [
      "A page template can be used to create several pages.",
      "A page can be created either based on a page template, or directly from scratch.",
      "A component can be directly inserted into a page as well as a page template.",
      "A component can be shared by different pages or page templates.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which of the following statements are correct about the actions that we can perform in different modes in SmartEdit?<br>There are two correct answers.",
    options: [
      "We can synchronize the changes about a page level component in the basic edit mode.",
      "We can remove a page-level component in the basic edit mode.",
      "We can navigate to different pages in the advanced edit mode. ",
      "We can edit a page-level component in the advanced edit mode. ",
    ],
    correct: [1, 3],
  },
  {
    question:
      "What can we do to support out-of-the-box personalization of storefront content in SAP Commerce Cloud?<br>There are two correct answers.",
    options: [
      "Big data analysis based on Adobe analytics",
      "Item-based restrictions on CMS items",
      "Intelligent selling Services for SAP Commerce Cloud",
      "CMS restrictions based on components or pages",
    ],
    correct: [2, 3],
  },
  {
    question:
      "Which of the following statements are correct about SAP Commerce Cloud, composable storefront?<br>There are two correct answers.",
    options: [
      "It's a full-stack application.",
      "It requires additional licensing fees.",
      "It’s the official storefront going forward.",
      "It’s a lean Angular-based JavaScript storefront.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "Which of the following statements regarding page slots, content slots, and components in SAP Commerce Cloud are correct?<br>There are two correct answers.",
    options: [
      "Page slots contain components such that if a page is rendered, all the components in those related page slots are displayed.",
      "A content slot can be associated with a page through a ContentSlotForPage item.",
      "A page template defines a lot of content slots.",
      "A component can be shared by several pages or page templates.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which of the following statements regarding the platform module of SAP Commerce Cloud is incorrect?<br>Choose the correct answer.",
    options: [
      "Platform includes a persistence framework for data-storage purposes",
      "Platform contains many business, system, and infrastructure services",
      "Platform is the foundation for all capabilities delivered with SAP Commerce Cloud",
      "Platform can be customized directly to meet different project requirements",
    ],
    correct: [3],
  },
  {
    question:
      "Which of the following frontends are offered out-of-the-box in SAP Commerce Cloud?<br>There are two correct answers.",
    options: [
      "SAP Commerce Cloud composable storefront",
      "Backoffice with dedicated perspectives for admins, business users, or developers.",
      "Microsoft ASP-based websites",
      "SOAP web services-based touch points",
    ],
    correct: [0, 1],
  },
  {
    question:
      "In SAP Commerce Cloud, features are typically packaged in which of the following units?<br>There are two correct answers.",
    options: ["Modules", "Extensions", "Functions/Methods", "Classes"],
    correct: [0, 1],
  },
  {
    question:
      "Which Java Development Kit (JDK) version can you use to compile SAP Commerce Cloud?<br>Choose the correct answer.",
    options: [
      "SAP Machine 17",
      "SAP Machine 11",
      "OpenJDK 17",
      "Oracle JDK 17",
    ],
    correct: [0],
  },
  {
    question:
      "SAP Commerce Cloud is a multilayered application. Identify the layers from the following options:<br>There are three correct answers.",
    options: [
      "Application Server layer",
      "Front End layer",
      "APIs layer",
      "Security layer",
      "Networking layer",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following statements are correct in relation to extension templates?<br>There are two correct answers.",
    options: [
      "When executing 'ant extgen’, the extension templates are copied to the custom folder",
      "Extension templates are not compiled during the ant build when declared in localextensions.xml",
      "Extension templates are out-of-the-box extensions of SAP Commerce Cloud",
      "Extension template can be directly customized to meet a specific project requirement",
    ],
    correct: [0, 2],
  },
  {
    question:
      "Which Spring technologies are used in SAP Commerce Cloud?<br>There are two correct answers.",
    options: [
      "Spring Security",
      "Spring Web Services",
      "Spring Data JPA (Java Persistence API)",
      "Inversion of Control",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What does the build framework do when you call 'ant' or 'ant all'?<br>There are three correct answers.",
    options: [
      "Compiles all extensions located in the custom folder along with their dependent extensions",
      "Generates model classes according to the definitions in *-items.xml",
      "Updates configuration of the SAP Commerce Server",
      "Collects localization properties files",
      "Updates the database schema according to the definitions in '*-items.xml'",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "Which of the following requires your attention, regarding extension dependencies?<br>There are two correct answers.",
    options: [
      "Platform module is always compiled first",
      "Cyclic dependencies can be possible with the appropriate configuration",
      "Platform depends on all the other extensions and all extensions are loaded when compiling the platform",
      "Dependency chain determines the *.properties precedence",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Which of the following statements about SAP Commerce Cloud's Initialization and Update processes is true?<br>There are two correct answers.",
    options: [
      "Initialization does not affect existing tables",
      "Initialization creates new tables and new data from scratch",
      "Update results in data loss",
      "Update applies changes to existing data or tables",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which of the following actions are possible within your custom backoffice extension?<br>There are three correct answers.",
    options: [
      "You can implement custom widget types to be used in Backoffice",
      "You can add new widget instances into Backoffice",
      "You can create another SAP Commerce UI with a custom application URL",
      "You can use a custom context configuration to change the existing Backoffice widgets",
      "You can customize the Backoffice URL to a new Backoffice URL",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "What actions can you perform in the Application Orchestrator within Backoffice?<br>There are two correct answers.",
    options: [
      "You can reset your changes to the default configuration",
      "You can create a new widget type",
      "You can customize the application mashup",
      "You can connect any two widgets via their sockets",
    ],
    correct: [0, 2],
  },
  {
    question:
      "Which of the following statements are correct regarding Backoffice configuration xml files?<br>There are three correct answers.",
    options: [
      "*backoffice-config.xml contains the application mashup for Backoffice",
      "*backoffice-widgets.xml contains the definitions of widget instances",
      "*backoffice-widgets.xml contains the socket communication between widget instances",
      "*backoffice-config.xml contains the configuration of context components",
      "*backoffice-widgets.xml contains the configuration of context components",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "Which of the following responses regarding Backoffice and Backoffice Framework are correct?<br>There are two correct answers.",
    options: [
      "Backoffice Framework is the SAP Commerce single user interface for all backend business tools.",
      "Backoffice is built for both administrators and business users to manage any type of data within the SAP Commerce.",
      "Backoffice is a software platform for developing web-based applications.",
      "Backoffice Administrative Cockpit is a User Interface built with the Backoffice Framework.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which of the following files are required when defining a custom widget type?<br>There are two correct answers.",
    options: [
      "A definitions.xml, to store the essential information about the custom widget type",
      "A zk file for rendering the view of the custom widget instances",
      "A Java controller class file with custom logic for interaction with the widget instances",
      "A cockpit-config.xml, with default context configuration",
    ],
    correct: [0, 2],
  },
  {
    question:
      "Which of the following responses are accurate regarding item types in items.xml?<br>There are three correct answers.",
    options: [
      "You can extend an existing item type",
      "You can define a new item type",
      "You can inject new attributes into existing item types",
      "You can remove an attribute out of predefined item types",
      "You can change a predefined item type by modifying its supertype",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which of the following responses are correct regarding deployment in the context of data modeling?<br>There are two correct answers.",
    options: [
      "A new deployment gets a type code automatically assigned if not explicitly specified",
      "A deployment specifies to create a new table for a custom item type",
      "Specifying deployment tables for direct subtypes of GenericItem is considered a best practice",
      "You must specify a deployment for a one-to-many relation",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which of the following responses are correct regarding relations and collections?<br>There are two correct answers.",
    options: [
      "It is considered a best practice to use a relation instead of a collection type when doing data modeling",
      "Searching for a value in a collection, particularly a large one, is more efficient than searching in a relation",
      "A one-to-many relation adds the reference property only to the model class of the many sides, but not to the one side",
      "Collections are stored as comma-separated references or values in one column of a database table",
    ],
    correct: [0, 3],
  },
  {
    question:
      "When working with localized data, which of the following statements are true?<br>There are two correct answers.",
    options: [
      'You can localize an attribute of any type by adding the text "localized:" before the type’s name',
      "A localized attribute contains language-specific values",
      "Any localized type that you use must be already predefined or defined by you, as a new relation type to the Language item type",
      "All localized type attributes get the globe icon in Backoffice for managing localized values",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which of the following options correctly states all the types that can be defined in items.xml?<br>Choose the correct answer.",
    options: [
      "Primitive types, Collections, Enumerations, Maps, Relations, and Composed types",
      "Atomic types, Vectors, Enumerations, Maps, Relations, and Composed types",
      "Atomic types, Collections, Enumerations, Maps, Relations, and Composed types",
      "Atomic types, Collections, Date types, Maps, Relations, and Composed types",
    ],
    correct: [2],
  },
  {
    question:
      "Which of the following accurately describe the out-of-the-box data models in SAP Commerce Cloud's product content management?<br>There are three correct answers.",
    options: [
      "Products are the basic element of a product catalog and must always be related to a certain catalog version",
      "Categories can have multiple parent categories",
      "A product catalog contains at least two catalog versions (staged & online)",
      "A product catalog version has a hierarchy of categories containing products",
      "A product can be assigned to multiple parent categories, but a category can have only one parent category",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "Which of the following key facts correctly represent classification systems?<br>There are three correct answers.",
    options: [
      "Classification system depends on related product catalogs",
      "Classification simplifies management of frequently changing product data",
      "Related products gain the attributes defined for all classification categories above it in the hierarchy",
      "Multiclassification is supported",
      "Implementing a new feature in classification systems needs the assistance of technical developers",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "Which of the following product modeling approaches are offered out-of-the-box in SAP Commerce Cloud?<br>There are three correct answers.",
    options: [
      "Parametric Products",
      "Classification",
      "Multidimensional Product Variants",
      "Basic Product Variants",
      "Component-based Products",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "How do you compare the classification approach with the type system approach?<br>There are three correct answers.",
    options: [
      "Type system approach can be used for attributes that belong to most items",
      "Classification approach can be used for situations where the available attributes change frequently or for attributes that are shared by a small range of products",
      "They are both defined in *-items.xml. Yet, the type system approach is more efficient, while classification is not easily accessible through SAP Commerce API",
      "Changes based on the type system approach require build, restart, and deployment",
      "The performance cost is higher for the type system due to its greater usage of system resources, whereas the classification system involves little cost",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "Which of the following statements about catalog synchronization are correct?<br>There are two correct answers.",
    options: [
      "Synchronization always copies specified content from the staged catalog version to the online catalog version.",
      "Synchronization can affect the entire catalog version, or only selected categories or products.",
      "Synchronization keeps the content of both related catalog versions consistent.",
      "Synchronization can be triggered manually, scheduled for one-time, or recurring execution.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which of the following responses is correct regarding the UPDATE operation?<br>Choose the correct answer.",
    options: [
      "You must specify unique=true to at least one attribute of the related item type",
      "You cannot update more than one item in one ImpEx script",
      "You must specify unique=true to all the business keys of the related item type",
      "You cannot update a map-typed attribute directly in ImpEx",
    ],
    correct: [0],
  },
  {
    question:
      "When referencing another item in ImpEx, attention can be applied to which of the following responses?<br>There are two correct answers.",
    options: [
      "You cannot reference another item if it has no business key",
      "You can use document ID to replace a business key for referencing another item",
      "You can use the business key of another item as a reference",
      "You can use the PK of another item as a reference.",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which of the following statements is a valid ImpEx header?<br>Choose the correct answer.",
    options: [
      "INSERT_UPDATE Customer;uid;name",
      "INSERT Customer;uid;name",
      "REMOVE Customer;uid",
      "UPDATE Customer;uid;name",
    ],
    correct: [1],
  },
  {
    question:
      "Which of the following statements about ImpEx are true?<br>There are two correct answers.",
    options: [
      "It is closely related to database",
      "You can use ImpEx to create, update, export, and remove items",
      "ImpEx is an out-of-the-box XML-based import and export framework",
      "ImpEx can be used to create backups",
    ],
    correct: [1, 3],
  },
  {
    question: "Where can you launch ImpEx?<br>There are two correct answers.",
    options: [
      "In Backoffice",
      "Through API Invocation",
      "Via business processes",
      "In SmartEdit",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What are the major features of Flexible Search?<br>There are two correct answers.",
    options: [
      "It is expressed in terms of database tables and columns in SAP Commerce",
      "Its query will not go through the cache",
      "It allows nearly every feature of SQL SELECT statements",
      "It is an out-of-the-box query language using an SQL-based syntax",
    ],
    correct: [2, 3],
  },
  {
    question:
      "Which of the following are valid keywords and operators in Flexible Search?<br>There are two correct answers.",
    options: ["ASC", "DISTINCTED", "LIKE", "COMBINE"],
    correct: [0, 2],
  },
  {
    question:
      "Which of the following statements apply when writing Flexible Search queries related to relations?<br>There are two correct answers.",
    options: [
      "For one-to-many relation, you should know the column name of the 'many' side table",
      "For many-to-many relation, you don’t need to mention the relation in your flexible search query",
      "For many-to-many relation, you must determine which related type is the sourceElement and which one is the targetElement",
      "For one-to-many relation, you don’t need to mention the relation in your flexible search query",
    ],
    correct: [2, 3],
  },
  {
    question:
      "What are the best practices to follow when building flexible search queries in Java code?<br>There are two correct answers.",
    options: [
      "When comparing date values, truncate them to use caching of flexible search results",
      "Directly use model attribute names and type names in flexible search queries",
      "It’s better to select PK to query 'whole items', rather than arbitrary attributes",
      "Use pagination via API to improve security",
    ],
    correct: [0, 2],
  },
  {
    question:
      "Regarding transaction management in SAP Commerce Cloud, which of the following are correct?<br>There are two correct answers.",
    options: [
      "You can use the tx XML schema",
      "You can use the SAP Commerce Transaction API",
      "You can change the isolation level of a transaction when using the @Transactional annotation",
      "JTA user transaction interface is provided",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What is the service layer in SAP Commerce Cloud?<br>Choose the correct answer.",
    options: [
      "It is the layer where data is persisted into the database",
      "It is the layer where data is rendered as RESTful web services response",
      "It is the layer where data is prepared to be displayed on the frontend",
      "It is the layer where data is processed according to business logic",
    ],
    correct: [3],
  },
  {
    question:
      "Regarding model classes, which of the following statements is not correct?<br>Choose the correct answer.",
    options: [
      "Model classes only have getters and setters, for instance, they don’t implement any business logic",
      "Model classes are all generated in a predefined folder in the platform when ant is executed",
      "A class implementing business logic can extend a Model class",
      'Model classes are generated based on the "generate=true" statement of item types in items.xml',
    ],
    correct: [2],
  },
  {
    question:
      "Which of the following is not a supported function of modelService?<br>Choose the correct answer.",
    options: [
      "Load models with modelService.get()",
      "Update models with modelService.update()",
      "Delete models with modelService.remove()",
      "Create models with modelService.create()",
    ],
    correct: [1],
  },
  {
    question:
      "Which of the following statements are correct regarding Data Transfer Objects (DTOs)?<br>There are two correct answers.",
    options: [
      "DTOs carry the final data to be passed on to the persistence layer",
      "DTO classes can be generated via a declaration in *-beans.xml",
      "It’s a good practice to implement DTO classes manually",
      "DTO class can be declared in more than one *-beans.xml in different extensions",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which of the following does the commercefacades extension provide?<br>There are two correct answers.",
    options: [
      "ShoppingFacade to handle the shopping phase",
      "OrderFacade to manage the order placement process",
      "OrderFacade to display details of submitted orders and the order history",
      "UserFacade to support user account operations",
    ],
    correct: [2, 3],
  },
  {
    question:
      "What can you do with a populator?<br>There are two correct answers.",
    options: [
      "You can call other SAP Commerce services to implement your custom calculation for the value population",
      "You should leave the custom calculation to the converter and only concentrate on setting values in the populator",
      "You can set attributes’ values from an object of type A to an object of type B",
      "You can convert an object of type A to an object of type B",
    ],
    correct: [0, 2],
  },
  {
    question:
      'You have defined two independent extensions. (1) extension1-beans.xml:(2) extension2-beans.xml: When you execute "ant all", what will happen?<br>Choose the correct answer.',
    options: [
      "Ant fails to build, because we can’t define the same DTO class in two different extensions",
      "Ant build is successful, with only class A generated in the platform extension",
      "Ant build is successful, with two classes of A generated in the two different extensions ",
      "Ant fails to build, because the compiler doesn’t know from which extension the class A can be generated first",
    ],
    correct: [1],
  },
  {
    question:
      "You extended the product type by injecting an additional attribute to the product type. You also want to show the new attribute value on the product detail page. What should you do to proceed?<br>Choose the correct answer.",
    options: [
      "The new attribute will be handled by the default product converter automatically",
      "Extend the product DTO to include the new attribute, then do a mapping from the new attribute in items.xml to the beans.xml, so that the default product converter can populate the value directly",
      "Extend the product DTO to include the new attribute and Implement a new converter to convert it",
      "Extend the product DTO to include the new attribute. Then, implement a new populator to fill the value. And finally, append the populator to the default product converter",
    ],
    correct: [3],
  },
];

let questions2 = [
  {
    question:
      "What can you configure on the Endpoint Configuration page in Cloud Portal?<br>Note: There are 3 correct answers to this question.",
    options: [
      "SSL Certificate",
      "IP Filter Sets",
      "Trusted Certificates",
      "Redirect Sets",
      "Host Alias Sets",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "How is the primary key (PK) for an SAP Commerce Cloud item created?<br>Note: There are 2 correct answers to this question.",
    options: [
      "It is automatically generated and assigned.",
      "It is generated from a counter and the type code of the item.",
      "It is generated from the item's unique business key(s).",
      "It is provided by the user in the Create wizard or as a column value in ImpEx.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following are valid types of environments in SAP Commerce Cloud in the public cloud?<br>Note: There are 3 correct answers to this question.",
    options: ["Staging", "Production", "Pre-Production", "Test", "Development"],
    correct: [0, 1, 4],
  },
  {
    question:
      "How are relations modeled in the database?<br>Note: There are 2 correct answers to this question.",
    options: [
      "One-to-many relations are stored in the links table.",
      "One-to-many relations are binary objects.",
      "One-to-many relations are stored in a column.",
      "Many-to-many relations are deployed as a table.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "When using Monitoring Support in the Integration API Module, what should you pay attention to?<br>Note: There are 2 correct answers to this question.",
    options: [
      "You can monitor the inbound integration requests using the Meta API.",
      "In Outbound monitoring, if the source of the OutboundRequest is not from outbound sync or webhooks, it is set as UNKNOWN.",
      "If you want to disable the monitoring, you need to change the dedicated properties in local.properties and restart the commerce cloud server.",
      "If the number of batches in a bulk request exceeds the limit allowed, then the system records one Inbound Request with the payload.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "In Integration API Module, which of the following API verbs are controlled by access rights?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Update - POST",
      "Create - POST",
      "Create - PATCH",
      "Update - POST, PATCH",
    ],
    correct: [1, 3],
  },
  {
    question:
      "What must you always specify when you are creating a new Adaptive Search Profile?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Category",
      "Index configuration",
      "Index type",
      "User",
      "Catalog version",
    ],
    correct: [1, 2, 4],
  },
  {
    question:
      "You synchronize a media item stored in SAP Commerce Cloud from a staged version to an online version. What happens next?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Both staged and online media items now refer to the same image file in the file system.",
      "The staged and online media items now refer to two different image files in the file system.",
      "The values of the attributes are copied from the source item in the staged catalog to the target item in the online catalog.",
      "The media format in the staged version is also synchronized to the media format in the online version.",
    ],
    correct: [0, 2],
  },
  {
    question:
      "You are implementing a new custom promotion action that changes the delivery mode of an order. What steps are required to make sure that the effects of this action are reverted as soon as the condition that triggered it is NO longer fulfilled?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Implement the undo method in your custom rule action strategy",
      "Define a new session attribute to store the original delivery mode",
      "Implement your custom action item so that it can store the original delivery mode",
      "Create a promotion that uses the inverse action if the condition is NOT fulfilled",
    ],
    correct: [0, 2],
  },
  {
    question:
      "What can you do within the integration UI Tool in Backoffice?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Create a search restriction to secure an integration object for only a certain integration user group.",
      "Set up access rights for integration objects.",
      "Force-delete an integration object even if it is associated with an InboundChannelConfiguration (ICC).",
      "Export the configuration types so that they can be imported into a target system.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "What are the advantages of using classification attributes?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Cached classification attributes provide better performance than fixed properties.",
      "Classification attributes are applied dynamically in response to customer actions.",
      "Business users can create or modify classification attribute definitions using the Backoffice.",
      "When modifying, Rebuilding and redeployment are NOT required.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "How can you define a new event?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Create a new EventTemplate in an ImpEx file.",
      "Create a new ItemType in an items.xml file.",
      "Extend a pre-defined event DTO in a custom beans.xml.",
      "Create a new DTO in a beans.xml file.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "Which interface would you inject into your class to allow you to trigger an indexing operation via API?",
    options: [
      "IndexerStrategy",
      "IndexerQueryContext",
      "IndexerListener",
      "IndexerService",
    ],
    correct: [3],
  },
  {
    question:
      "You are creating a new SolrIndexProperty as a facet and want to define it using facet ranges. What do you need to do to achieve that?",
    options: [
      "Manually create SolrValueRange items to define the range boundaries. Create a SolrValueRangeSet, add SolrValueRange items, and add to the SolrIndexProperty.",
      "Define the number of ranges in the SolrIndexProperty. Provide sample data that is used to generate the SolrValueRange items.",
      "Define the cadence of the ranges in the SolrIndexProperty. Provide the sample data that is used to generate the SolrValueRangeSet.",
      "Create SolrValueRange items to define the range boundaries. Add them to the SolrIndexProperty",
    ],
    correct: [0],
  },
  {
    question:
      "To install and configure the Solr server in cloud mode, which sequence of steps should you use?",
    options: [
      "Disable the autostart for the default instance. Enable the autostart for the cloud instance. Set the cloud instance mode to true.",
      "Disable the autostart for the cloud instance. Enable the autostart for the default instance. Set the default instance mode to cloud.",
      "Disable the autostart for the default instance. Enable the autostart for the cloud instance. Set the cloud instance mode to cloud.",
      "Disable the autostart for the cloud instance. Enable the autostart for the default instance. Set the cloud instance mode to true.",
    ],
    correct: [2],
  },
  {
    question:
      "When are consignments created for an order in the default order management implementation?",
    options: [
      "When an administrator approves the order",
      "After the order is placed, but before it is sourced successfully",
      "When the user adds items to the cart",
      "After the order is placed and after it has been sourced successfully",
    ],
    correct: [3],
  },
  {
    question: "What is the purpose of the dynamic forms in the Backoffice",
    options: [
      "To provide a dynamic extension of type definitions in the SAP Commerce platform",
      "To provide dynamic client-side validation of web forms",
      "To provide a dynamic layout of the wizards at runtime using drag and drop",
      "To enable dynamic behaviors in the user interface of Backoffice applications",
    ],
    correct: [3],
  },
  {
    question:
      "How can you create asynchronous events in the SAP Commerce Cloud platform?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Implement the ClusterAwareEvent interface.",
      "Extend the AbstractEvent class.",
      "Implement the TransactionAwareEvent interface.",
      "Change the platformClusterEventSender Spring bean configuration.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "Where are enumerations stored?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Dynamic enumerations are stored in the active session.",
      "Non-dynamic enumerations are stored as SpEL lists in Spring.",
      "Dynamic enumerations are stored in the database.",
      "Non-dynamic enumerations are stored as enumeration classes.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "How many category items will the following ImpEx create?<br>$prodCat=electronicsProductCatalog<br>$version=Staged<br>$catVersion=catalogVersion(catalog(id[default=$prodCat]),version[default=$version])<br>INSERT_UPDATE Category;code[unique=true];$catVersion[unique=true]<br>;test_category;electronicsProductCatalog<br>;test_category;apparelProductCatalog:$version<br>;test_category;:Online<br>;test_category;",
    options: ["1", "3", "4", "2"],
    correct: [1],
  },
  {
    question:
      "You updated a price row for a particular product using the Backoffice Product Cockpit and also made sure the cronjob for synchronizing the involved product catalog was executed sucessfully. When you visit the category page containing the specific product, you discover that its new price value is NOT properly displayed. How can you fix this issue?",
    options: [
      "Synchronize the category page in the Backoffice Administration Cockpit",
      "Run a Solr indexer operation in the Backoffice Administration Cockpit",
      "Synchronize the involved product in the Backoffice Product Cockpit directly",
      "Re-import the price using ImpEx",
    ],
    correct: [1],
  },
  {
    question:
      "In SmartEdit, what can you do with variations defined for a customization?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Assign the customer a custom search profile if a variation is in effect.",
      "Apply a variation to customers who belong to a combination of segments.",
      "Show different content in a slot if a variation is in effect.",
      "More than one variation in a customization can be triggered at the same time.",
      "Give the customer a coupon if a variation is in effect.",
    ],
    correct: [1, 2, 4],
  },
  {
    question:
      "How does SAP Commerce cloud, composable storefront compare to the SAP Commerce Cloud Accelerators?<br>Note: There are 2 correct answers to this question.",
    options: [
      "They have the same feature parity, but Spartacus is more upgradable.",
      "Accelerators are JSP-based while Spartacus is JavaScript-based.",
      "They are both using OCC API to connect to the commerce platform.",
      "They are both extensible according to project requirement.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "You have created your products and price rows using the approach displayed in the following ImpEx file: $catalog-id=Default $catalogversion=Staged $catalogversion=catalogversion(catalog(id),version)[unique=true,default=$catalog-id:$catalog-version] INSERT_UPDATE Product;code[unique=true];$catalogversion;name[lang=en];unit(code);approvalStatus(code); ;product1;;product1;pieces;approved; ;product2;;product2;pieces;approved; #in total 1000 product data lines INSERT_UPDATE PriceRow;productId[unique=true];price;unit(code);currency(isocode) ;product1;100;pieces;EUR ;product2;200;pieces;EUR #in total 1000 price row data lines. After you import this file and synchronize the catalogs (Staged to Online), how many items are stored in the database?",
    options: [
      "2000 products and 1000 price rows",
      "1000 products and 2000 price rows",
      "2000 products and 2000 price rows",
      "1000 products and 1000 price rows",
    ],
    correct: [0],
  },
  {
    question:
      "What attributes can you set for a SearchRestriction?<br>Note: There are 2 correct answers to this question.",
    options: ["restrictedType", "currentUser", "principal", "argumentType"],
    correct: [0, 2],
  },
  {
    question:
      "How can CronJobs be started or aborted?<br>Note: There are 3 correct answers to this question.",
    options: [
      "CronJobs can be started manually using flexible search.",
      "CronJobs can be aborted automatically if a configurable time threshold is exceeded.",
      "CronJobs can be started manually via the Backoffice administration perspective.",
      "CronJobs can be aborted only if implemented as abortable.",
      'CronJobs can be started manually via the command line by running "ant runcronjob".',
    ],
    correct: [2, 3, 4],
  },
  {
    question:
      "What are best practices when using models?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Create models using Java's 'new' keyword",
      "Use modelService.get() to obtain an item referenced by another using its PK.",
      "Save the model using the modelService after the model is modified.",
      "Create models using modelService.create( ).",
    ],
    correct: [2, 3],
  },
  {
    question:
      "In personalization (based on SmartEdit), you want to configure when the experience calculation is triggered for registered customers without requiring any customization. What are the available options?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Trigger the experience calculation for certain URL patterns.",
      "Trigger the experience calculation after a defined number of requests.",
      "Trigger the experience calculation when the customer logs in.",
      "Trigger the experience calculation when the customer adds a product to the cart.",
      "Trigger the experience calculation when the customer is promoted to a reward-level status.",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "You need to create a CronJob for an automated task that will be performed every day at midnight. Which steps would you follow?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Register the JobPerformable bean in your extension's Spring configuration file.",
      "Define the Cronjob logic in a class that implements the JobPerformable interface.",
      "Perform a system update for essential data.",
      "Perform a system update for sample data.",
      "Create a CronJob item and a trigger for midnight using ImpEx or Backoffice.",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "What are the advantages of using keyword redirection within Search and Navigation?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Customers can be redirected to a URL specified by the vendor.",
      "Keyword redirects can be easily configured using the Backoffice administration perspective.",
      "Keywords make Solr searches more efficient.",
      "Keywords specify synonyms that redirect to standard catalog terms.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What do you set up to create visibility rules for specific product items for a user group?",
    options: [
      "A type access right on the Product type for the user group",
      "A search restriction on the UserGroup type",
      "A search restriction on the Product type for the user group",
      "A type access right on the UserGroup type",
    ],
    correct: [2],
  },
  {
    question:
      "The miniature car replicas your company sells on its site are now available in a choice of colors, each at a different price point. You wish your product page to allow your customers to select the color before adding the replica to the cart. To complicate things, your boss won't let you restart your production servers to add this functionality. What entities would you have to create to achieve this?",
    options: [
      "A ConfigurationCategory, an AbstractConfiguratorSetting for color, a ConfiguratorType, and an OrderEntryProductInfo for each color a given replica is available in.",
      "A VariantCategory for color, a VariantValueCategory for each color, and a GenericVariantProduct for each color a given replica is available in.",
      "A ClassficationCategory, a ClassificationAttribute for color, a ClassificationAttributeUnit, a ClassificationAttributeValue for each color a given replica is available in, and a ClassAttributeAssignmentModel instance to tie them together.",
      "A ComposedType, that extends the VariantProduct type to add a color attribute, and an instance of this type for each color a given replica is available in.",
    ],
    correct: [2],
  },
  {
    question:
      "What does the Cloud Portal application enable you to do?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Set up and deploy SAP Commerce Cloud in the public cloud.",
      "Manage the configurations of your cloud hot folders.",
      "Create and configure endpoints tied to configured aspects.",
      "Review the page load times of your environments.",
      "Generate new passwords for admin and anonymous users.",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "What is the recommended way to deploy Solr in a production environment?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Embedded with the SAP Commerce Cloud server",
      "As one leading server and multiple subordinate servers",
      "As one standalone server",
      "As a Solr Cloud",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which of the following scenarios can be supported directly with the promotion module's out-of-the-box functionality?<br>Note: There are 2 correct answers to this question.",
    options: [
      "When you purchase 2 category X products, receive 30% off all category Y products.",
      "When you spend at least 200 dollars on category X products, get 30% off category Y products and category Z products.",
      "When you spend at least 200 dollars on category X products, and not more than 100 dollars on Category Y products, get 30% off all category Z products.",
      "When you buy 1 category X product and 1 category Y product, get 30% off any products added by CSA using the ASM module.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following relations are defined in the data model for Personalization (based on Smart Edit)?<br>Note: There are 2 correct answers to this question.",
    options: [
      "A one-to-many relation between CxCustomization and CxVariation",
      "A many-to-many relation between CxSegmentTrigger and CxSegment",
      "A one-to-many relation between CxExpressionTrigger and CxSegment",
      "A many-to-many relation between CxVariation and CxAbstractAction",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Interceptors allow you to monitor and change the course of any model's lifecycle within SAP Commerce Cloud. However, for performance reasons, interceptors can also be disabled in API calls or with ImpEx.<br>Which of the following are the correct properties to use when disabling interceptors?<br>Note: There are 2 correct answers to this question.",
    options: [
      "disable.interceptor.ids",
      "disable.interceptor.beans",
      "disable.interceptor.types",
      "disable.interceptor.for.types",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which configuration options are available on a cache region?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Clustering enabled",
      "Eviction policy",
      "Persistence mode",
      "Statistics enabled",
      "Size",
    ],
    correct: [1, 3, 4],
  },
  {
    question:
      "Your solution has been live for a significant period of time. Now you need to update project data across multiple environments, but this update should be run only once.<br>What is the recommended approach for updating the project data?",
    options: [
      "Extract a SQL script of all the changes in a single environment, where a DBA can then run directly against the database for all remaining environments.",
      "With each deployment, manually import the ImpEx files through the Admin Console or through the ant importimpex target.",
      "Create a class that extends AbstractPatchesSystemSetup and configure any data patches to run an import of your ImpEx files during an update.",
      "Create a class that extends AbstractSystemSetup, and use the @SystemSetup annotation with TYPE.PROJECT, to run an import of your ImpEx files during an update.",
    ],
    correct: [2],
  },
  {
    question:
      "Which of the following is a mechanism used by WCMS to position components on a page?",
    options: [
      "The component's CurrentPosition attribute is used to determine which component on the page in which the item should be displayed.",
      "The Page item has a position map that links each component to the component on the page in which the item should be displayed.",
      "The ContentSlot item's code property is used to determine the slot on the page where the item should be displayed.",
      "The position attribute in the ContentSlotForTemplate item is used to identify the slot on the page where the item should be displayed.",
    ],
    correct: [3],
  },
  {
    question:
      "What are the advantages of using classification attributes?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Classification attributes are preferred in situations where there are more than two variance selectors.",
      "Classification attributes are more efficient, and they produce simpler queries and business logic.",
      "Technical users can create and modify classification attribute definitions using ImpEx.",
      "When modifying, rebuilding and redeployment are NOT required.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "What should you pay attention to when connecting widget A to widget B?",
    options: [
      "The type of A's input socket should be the same as B's output socket.",
      "The type of A's output socket must match B's input socket, using either inheritance or Java generics.",
      "The type of A's output socket must be the same as B's input socket.",
      "Both A's output socket type and B's input socket type must be a composed item type.",
    ],
    correct: [2],
  },
  {
    question:
      "How do we create and start a workflow based on a workflow template?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Use the 'Create Workflow' button in the List view of the Workflows workspace.",
      "Implement an activation script in the workflow template.",
      "Use WorkflowService to create and start a workflow.",
      "Use WorkflowProcessingService to create and start a workflow.",
      "Use the 'Create Workflow' button in the Editor area of the selected workflow template in Backoffice.",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "The Scripting Engine allows you to run logic written in one of three scripting languages at run time without restarting the SAP Commerce Cloud Server. How can scripts be applied out of the box in SAP Commerce Cloud?<br>Note: There are 3 correct answers to this question.",
    options: [
      "By implementing a Cronjob with dynamic script-based logic.",
      "By implementing an Action in a process definition file by referencing an external script.",
      "By creating a new Event to be communicated between services in the service layer.",
      "By providing a TaskRunner implementation based on scripts to run dynamic tasks.",
      "By including scripts in ImpEx to execute additional code during the data import process.",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "What should you pay attention to when you are working with a web hook?<br>Note: There are 2 correct answers to this question.",
    options: [
      "A webhook guarantees the At Least Once (ALO) delivery principle, and concurrent events are not completely discarded.",
      "A webhook requires an integration object as the notification payload, and the consumed destination as the webhook subscriber.",
      "A webhook uses the optional filter attribute to control which consumed destination will receive notifications.",
      "A webhook can be configured to send notifications when an item is created, updated, or deleted.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "The miniature car replicas that your company sells on its site are now available in a choice of colors, each at a different price point. You want your product page to let your customers select the color before adding the replica to the cart. To complicate things, your boss won't let you restart your production servers to add this functionality. What entities would you have to create to achieve this?",
    options: [
      "A Composed Type, that extends the Variant Product type to add a color attribute, and an instance of this type for each color that a given replica is available in.",
      "A ConfigurationCategory, an AbstractConfiguratorSetting for color, a ConfiguratorType, and an OrderEntryProductInfo for each color that a given replica is available in.",
      "A ClassificationCategory, a ClassificationAttribute for color, a ClassificationAttributeUnit, a ClassificationAttributeValue for each color that a given replica is available in, plus a ClassAttributeAssignmentModel instance to tie them together.",
      "A VariantCategory for color, a VariantValueCategory for each color option, and a GenericVariantProduct for each color that a given replica is available in.",
    ],
    correct: [2],
  },
  {
    question:
      "When you are defining properties in manifest.json, which of the following attributes are you allowed to use?<br>Note: There are 3 correct answers to this question.",
    options: ["persona", "value", "key", "environment", "name"],
    correct: [0, 1, 2],
  },
  {
    question:
      "The build process in SAP Commerce Cloud looks for project customizations (e.g. for custom extensions or composable storefront) in a project repository.<br>What are the recommended principles for setting up the project repository?<br>Note: There are 2 correct answers to this question.",
    options: [
      "A manifest.json file is located in the root directory to specify build properties for all customizations.",
      "A manifest.json file is placed under a separate subdirectory for each customization.",
      "A core-customize folder is created in the root directory for SAP Commerce Cloud customizations.",
      "A single root directory is created with JavaScript storefront support.",
    ],
    correct: [1, 2],
  },
  {
    question:
      "You want to display a custom CMS component in SAP Commerce Cloud, composable storefront.<br>What can be configured or implemented regarding this CMS component?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Create an HTML template to render the CMS component.",
      "Map the Angular component to the CMS component in the cmsComponentRegistry.",
      "Define the new CMS component type in *-items.xml.",
      "Create a CMS component controller in the cmsComponentControllerRegistry.",
      "Implement a TypeScript class for a custom Angular component.",
    ],
    correct: [1, 2, 4],
  },
  {
    question:
      "Which of the following items are configured through a direct relation to a BaseStore?<br>Note: There are 3 correct answers to this question.",
    options: [
      "A list of product catalogs that provide the product info shown to customers.",
      "A list of points of service that represent local branches.",
      "A list of customers that are associated with the BaseStore.",
      "A list of content catalogs that provide the pages, slots, and other CMSItems shown to customers.",
      "A list of warehouses that support the delivery.",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "Which of the core storefront features does SAP Commerce Cloud, composable storefront support?<br>Note: There are 3 correct answers to this question.",
    options: [
      "B2B Scheduled Replenishment",
      "Customer Interests",
      "Newsletter Subscription",
      "Configurable Promotions",
      "Wish List",
    ],
    correct: [1, 3, 4],
  },
  {
    question:
      "How can Cron Jobs be started or stopped?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Cronjobs can be started manually through the Backoffice administration perspective.",
      "Cron Jobs can be stopped by calling cronJobService.",
      "Cronjobs can be started manually through the command line by running 'ant runcronjob'.",
      "Cronjobs can be stopped only if implemented as able to be stopped.",
      "Cronjobs can be stopped automatically if a configurable time threshold is exceeded.",
    ],
    correct: [0, 2, 3],
  },
  {
    question:
      "What should you pay attention to when defining a dynamic attribute for a composed type in the items xml file?<br>Note: There are 2 correct answers to this question.",
    options: [
      "A dynamic attribute must refer to an attributeHandler class that implements the AttributeHandler interface.",
      "A dynamic attribute can be defined with a localized type (for example, localized.java.lang.String).",
      "A write-only dynamic attribute can be defined by setting its modifiers 'write' to true and 'read' to false.",
      "A dynamic attribute's value can be saved in the database if specified in -items.xml.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Assuming that property impex.legacy.scripting is set to false and 'Enable code execution' is selected, what are the results of the following ImpEx script?",
    options: [
      "Items 'book1', 'book2', and 'book3' will be inserted or updated, but any leading and trailing spaces in the field values will be ignored.",
      "No entries will be updated or inserted.",
      "Items 'book1', 'book', and 'book3' will be inserted or updated. If updated, all their existing property values will first be erased.",
      "Items 'book1', 'book2', and 'book3' will be inserted or updated. The name property of item 'book3' will be erased, but other properties won't be affected.",
    ],
    correct: [1],
  },
  {
    question:
      "You need to add a new Cockpit to Backoffice to implement new features for a business user role.<br>Which tasks are required?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Configure an existing layout widget in myextension-backoffice-config.xml.",
      "Add a new layout widget in myextension-backoffice-widgets.xml.",
      "Create a bean for the new cockpit.",
      "Create or reuse a Backoffice extension with the proper meta information.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "How are relations modeled in the database?<br>Note: There are 2 correct answers to this question.",
    options: [
      "One-to-many relations are stored in a column of the table of one of the related items.",
      "One-to-many relations are stored as a column in the tables of both related items.",
      "Many-to-many relations are deployed as a table.",
      "One-to-many relations are stored in the links table.",
    ],
    correct: [0, 2],
  },
  {
    question:
      "You are asked to define a new business process. What steps do you perform?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Define the process in XML format.",
      "Define actions as new item types.",
      "Define the actions as spring beans.",
      "Implement actions in java code.",
      "Define the process in BPMN format.",
    ],
    correct: [0, 2, 3],
  },
  {
    question:
      "When defining a merchandising carousel in Smart Edit, based on Intelligent Selling Services, what should you pay attention to?<br>Note: There are 2 correct answers to this question.",
    options: [
      "A product mix can be used in multiple strategies.",
      "A merchandising carousel can reference one or more product mixes.",
      "A strategy can reference one or more product mixes.",
      "A merchandising carousel can use one or more strategies.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "Which services are included in the basecommerce extension to address customer services functionality?<br>Note: There are 3 correct answers to this question.",
    options: [
      "RefundService",
      "OrderCancelService",
      "ReturnService",
      "CustomerReviewService",
      "CustomerAccountService",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "You want to add a new feature using a classification system for an existing product.<br>Which practices are recommended to accomplish this task?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Create a classification category with an attribute assignment model and assign it to the product.",
      "Create an empty classification unit even if the new feature doesn't have a unit.",
      "Use a feature descriptor to represent the name of the new feature and assign it to the product.",
      "Use feature descriptor values if the values of the new feature are limited to a selection.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "In which of the following cases can a Solr indexing operation be initiated?<br>Note: There are 2 correct answers to this question.",
    options: [
      "When you invoke an index operation in Backoffice on an instance of SolrFacetSearchConfig.",
      "When the SAP Commerce Cloud instance is restarted.",
      "When the cache is cleared in the HAC.",
      "When your code makes an API call to a Spring bean instance of IndexerQueryContext.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What is the effect of the redeclare attribute within an itemtype definition?<br>Note: There are 2 correct answers to this question.",
    options: [
      "It can be used to change the class of an itemtype.",
      "It can be used to change the type of an attribute.",
      "It can be used to change the modifier of an attribute.",
      "It can be used to change the name of an attribute.",
    ],
    correct: [1, 2],
  },
  {
    question:
      "In Smart Edit, what can you do with variations that are defined for a customization?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Give the customer a coupon if a variation is in effect.",
      "Use the Combined View mode to view the effect of more than one variation in a customization.",
      "Show different content in a slot if a variation is in effect.",
      "Apply a variation to customers who explicitly do not match a segment.",
    ],
    correct: [2, 3],
  },
  {
    question:
      "How can you start a business process in SAP Commerce Cloud?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Invoke the appropriate method of the Business Process Service in the script console of the SAP Commerce Cloud Administration Console.",
      "Define a trigger for the business process.",
      "Use the Backoffice Business Process section.",
      "Invoke the appropriate method of the Business Process Service from Java code.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What should you pay attention to when applying dynamic forms in Backoffice?<br>Note: There are 3 correct answers to this question.",
    options: [
      "A section can be made visible in a Create wizard dynamically when the value of a given attribute is changed.",
      "A tab can be disabled in an Editor area dynamically when the value of a given attribute is changed.",
      "A dynamic form's action can be triggered by any model change.",
      "Dynamic forms can be used in Editor areas, wizards, and list views (collection browsers).",
      "Switching Tabs dynamically in an Editor area can be configured when the value of a given attribute is changed.",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "You need to create a new promotion based on customer reviews for a product. You create an extension called customPromotion with a new Rule Aware Object to keep customer reviews. In which file will you define this new Rule Aware Object?",
    options: [
      "In the customPromotion-backoffice-config.xml file",
      "In the customPromotion-beans.xml file",
      "In the customPromotion-spring.xml file",
      "In the customPromotion-items.xml file",
    ],
    correct: [1],
  },
  {
    question:
      "What causes item data to be invalidated in the SAP Commerce Cloud entity cache?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Calling the modelService.create() method passing a Model class",
      "Calling the modelService.save() method passing an Item model",
      "Calling a setter method on a Model class",
      "Receiving an invalidation notification for the item through cluster messaging",
    ],
    correct: [1, 3],
  },
  {
    question:
      "What operations can you perform on an integration object in the Type modeling workspace of Backoffice's Integration UI Tool?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Create a new virtual attribute and link the calculation logic to a script object.",
      "Authorize users and manage integration object access rights.",
      "Control how data search should be restricted regarding type hierarchies.",
      "Change the EDMX file in the EDMX editor using the Metadata viewer.",
      "Download the audit report containing the modification history of the integration object.",
    ],
    correct: [0, 2, 4],
  },
  {
    question:
      "You restart the platform without running 'ant all'.<br>Which of the following changes take effect?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Removal of an extension from the localextensions.xml file",
      "Addition of a Spring bean definition",
      "Definition of a new item type is created in the items.xml file for an extension",
      "Changes to database properties in the local properties file",
    ],
    correct: [1, 3],
  },
  {
    question:
      "What can you configure on the Endpoint Configuration page in Cloud Portal?<br>Note: There are 3 correct answers to this question.",
    options: [
      "IP Filter Sets",
      "Web Application Firewall",
      "HTTP Response Header Sets",
      "Host Alias Sets",
      "Trusted Certificates",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "You are running a transaction that creates an item and updates it twice. If the transaction is committed successfully, how many After Save Event items will the Service Layer create?",
    options: [
      "This depends on how the getId() method is implemented.",
      "This depends on how many times the modelService.save() method is called.",
      "1",
      "2",
    ],
    correct: [2],
  },
  {
    question:
      "Which of the following are best practices for adding a new parameter to an existing method of Commerce Cart service?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Overload the existing method of Commerce Cart Service by adding the new parameter.",
      "Add a new property to Commerce Cart Parameter in a beans.xml file.",
      "Extend the default implementation of the method to handle the new parameter.",
      "Extend the default strategy, which is called by the method, to handle the new parameter.",
    ],
    correct: [1, 3],
  },
  {
    question:
      "You need to create a Cron job for an automated task that will be performed every day at midnight. Which steps can you follow?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Register a ServiceLayerJob bean in your extension's Spring configuration file.",
      "Define the job logic in a class that implements the JobPerformable interface or extends its sub-class.",
      "Define a job bean in your extension's spring configuration file.",
      "Register a Cronjob bean to refer to the java implementation.",
      "Create a Cronjob item and a trigger for midnight using ImpEx or Backoffice.",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "What happens when you use a deployment tag in the items.xml file?<br>Note: There are 2 correct answers to this question.",
    options: [
      "The deployment type code is used as part of the primary key (PK) of the type's items.",
      "Only non-inherited properties of the enclosing type are stored in the deployment table.",
      "The name of the deployment table is generated automatically.",
      "All instances of the enclosing type are stored in the specified database table.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What can a 'backoffice-widgets.xml' contain in the Back-office framework?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Widget connection",
      "Virtual socket definition",
      "Spring beans of Backoffice web context",
      "Context configuration object definition",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Your system contains a search restriction with the following parameters:<br>Type: Product<br>User: employeegroup<br>Restriction: 1=0<br>There is a product 'Candle' in the online catalog and a variant product 'PinkCandle' in the online catalog.<br>A user belonging to employeegroup searches for Variant Product instances using Advanced Search with the code as a filter in Backoffice's administration cockpit, this will initiate the following flexible search query: 'SELECT (pk) FROM (Variant Product) WHERE (code)='PinkCandle'<br>What happens next?",
    options: [
      "The flexible search query returns an empty list",
      "The flexible search query returns all variant products, except 'PinkCandle'.",
      "The flexible search query returns the variant product 'PinkCandle'",
      "The flexible search query returns all instances of Variant Product",
    ],
    correct: [0],
  },
  {
    question:
      "SAP Commerce Cloud, composable storefront is the strategic storefront solution for SAP Commerce Cloud. What out-of-the-box features does it provide?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Server-Side Rendering (SSR) to render static content",
      "Download support from the NPMJS repository",
      "Routing URLs to enhance SEO support with configurable URLs",
      "Outlets to configure the application layout",
    ],
    correct: [0, 2],
  },
  {
    question:
      "What should you pay attention to when creating and implementing an OCC (Omni Commerce Connect) extension for OCC web services?<br>Note: There are 3 correct answers to this question.",
    options: [
      "The new/custom OCC extension has its own web context",
      "The XML configuration file must end with '-web-spring.xml' to be loaded by the commercewebservices extension by default.",
      "The new custom OCC extension name must end with 'OCC'.",
      "The yoCC extension template should be used.",
      "The web/src folder should contain the REST controller implementation",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "Which of the following can you configure in a widget definition (definition.xml) file?<br>Note: There are 2 correct answers to this question.",
    options: [
      "The default values for widget settings",
      "The available virtual sockets",
      "The business logic of the widget with a bean shell script",
      "The view file",
    ],
    correct: [0, 3],
  },
  {
    question:
      "When a customer places an order using the default order management process that's defined in the yacceleratorfulfilmentprocess extension, when does the fulfillment process send the notification that the order has been placed?",
    options: [
      "After the payment has been processed",
      "After the order has been fraud-checked",
      "After communication with the warehouse",
      "After the order has been completely sourced",
    ],
    correct: [1],
  },
  {
    question:
      "You have these example item types defined in myext-items.xml. How would you localize the identification attribute?",
    options: [
      "Change the type name to 'localizedPassport'. The code generator does the rest.",
      "Define a relation between Student and Passport using a relation tag with parameter localized='true'.",
      "Define a localized Passport attribute for the Student type in myext/resources/localization/myext_locales_XY.properties.",
      "Change the type name to 'localizedPassport' and create a map type with that name that returns Passport items.",
    ],
    correct: [3],
  },
  {
    question:
      "To define the data that gets extracted into the Solr index for searching, what do you need to provide?<br>Note: There are 2 correct answers to this question.",
    options: [
      "A flexible search query for an incremental update",
      "An ImpEx script for a full load",
      "A solrconfig XML file",
      "A flexible search query for a full load",
    ],
    correct: [0, 3],
  },
  {
    question:
      "In an extension named myext, you defined Pump, a subtype of the Product item type with a property named efficiency. You have also extended the product DTO bean to have an efficiency property. To copy the efficiency property to the product DTO, what do you need to do?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Create a PumpPopulator class that extends ProductPopulator and, if necessary, copies the efficiency property from the Pump item to the productDTO bean. In myext-spring.xml, redefine the productPopulator alias to point to an instance of PumpPopulator.",
      "Write a PumpAttributePopulator class that copies the efficiency property from the item to the DTO only if its method is passed an instance of PumpModel. Define a bean for this new class in myext-spring.xml, and use a modifyPopulatorList bean to add it to the productConverter's list of populators.",
      "Make sure the definition of the Pump item type defines the efficiency attribute with the persistence type property. When you run ant all, the productConverter class that's generated in bootstrap/gensrc will copy the efficiency property to the productDTO.",
      "Write a PumpProductConverter class that extends AbstractPopulatingConverter, and copies the efficiency property from the Pump item to the productDTO bean if the item is an instance of Pump. Use this class to create a pumpProductConverter bean in myext-spring.xml.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "Which of the following configurations can be done to a ContentSlot?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Add a list of CMS Components to it",
      "Assign it to a maximum of one page using a ContentSlotForPage Item.",
      "Assign it to one or more pages using ContentSlotForPage Items.",
      "Define valid CMS Components for it by modifying the ElementsForSlot relation.",
    ],
    correct: [0, 2],
  },
  {
    question:
      "What fields are important for creating a SolrIndexedProperty using ImpEx?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Field Value Provider, which is required and names the Spring bean that will provide the field value.",
      "Use for Autocomplete, which is optional and defaults to false.",
      "Facet, which is required and must have one of the values Refine, MultiSelect, or MultiSelectAnd.",
      "Value Provider Parameter, which is required and identifies the item attribute that's passed to the fieldValueProvider.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What can you do in the Builds workspace in Cloud Portal?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Deploy a successful build to a given environment",
      "Edit the repository that's referenced in a build object and trigger a rebuild.",
      "Delete any successful build.",
      "View the history of the past deployments of a selected build.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "During an SAP Commerce Cloud build, the build framework generates model classes for item types that are defined in items.xml. Where are the model classes generated and why?",
    options: [
      "Always in bootstrap/gensrc of the extension where the type is defined for the first time, so that the type can be extended by others",
      "Either in the extension where the type is defined, or in the platform extension if it is not explicitly specified.",
      "Always in bootstrap/gensrc of base commerce, to avoid cyclic dependency",
      "Always in bootstrap/gensrc of platform, to support the relation type",
    ],
    correct: [3],
  },
  {
    question:
      "Which component configurations does the Service layer architecture promote?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Facades orchestrate Converters",
      "Services orchestrate Converters",
      "Services orchestrate Strategies",
      "Facades orchestrate Strategies",
      "Facades orchestrate Services",
    ],
    correct: [0, 2, 4],
  },
  {
    question:
      "What Solr index operation uses the indexedProperties field on the SolrExtIndexer Cron Job?",
    options: ["PARTIAL_UPDATE", "FULL", "DELETE", "UPDATE"],
    correct: [0],
  },
  {
    question:
      "You are creating a new ancillary catalog to group products in your shop. What principles should you take into account?<br>Note: There are 2 correct answers to this question.",
    options: [
      "A catalog must have at least 2 versions: staged and online.",
      "A catalog version has a hierarchy of categories, each containing products",
      "A catalog can contain an unlimited number of catalog versions.",
      "Read and write access of a catalog can be restricted from its Permission tab in the editor area of Backoffice.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "When you define an aspect in your manifest.json file, what types of information should you provide?<br>Note: There are 3 correct answers to this question.",
    options: [
      "excludedPackages",
      "name",
      "extensions",
      "properties",
      "webapps",
    ],
    correct: [1, 3, 4],
  },
  {
    question:
      "Which order-splitting strategies are provided in the base commerce extension?<br>Note: There are 3 correct answers to this question.",
    options: [
      "Split by payment method",
      "Split by named delivery date",
      "Split by stock availability",
      "Split by warehouse",
      "Split by order date",
    ],
    correct: [1, 2, 3],
  },
  {
    question: "What do you need to keep in mind with Type-Based Access Rights?",
    options: [
      "They can be configured using the Principal Permission action button on the Backoffice Edit Employee page.",
      "They can be configured using the Type permission button on the Backoffice Edit Product page.",
      "They control access to specific items of a given type",
      "They affect every user role in SAP Commerce Cloud.",
    ],
    correct: [0],
  },
  {
    question:
      "You are implementing two new independent extensions, extension A and extension B, both of which extend and overwrite a bean that's defined in the core platform. How can you make sure the bean from extension A doesn't override the one from extension B?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Define a dependency in which extension B requires extension A.",
      "List extension B after extension A in localextensions.xml.",
      "Ensure that only one of the extensions is included in the build.",
      "In the bean's XML definition in extension B, use the parent attribute to specify the core bean.",
    ],
    correct: [0, 1],
  },
  {
    question:
      "What is Smart Edit's Navigation Management page useful for?<br>Note: There are 2 correct answers to this question.",
    options: [
      "It can define more than one navigation hierarchy, each accessed by a different component on the page.",
      "It is used to configure automatic mapping of the Product Catalog's category hierarchy to the navigation bar displayed on site pages.",
      "It allows you to manipulate a parent-child hierarchy of CMS LinkComponent objects.",
      "It allows you to manipulate a hierarchy of CMS Navigation Node items, each of which may contain a CMSNavigationEntry.",
    ],
    correct: [0, 3],
  },
  {
    question:
      "What must you always specify when you are creating a new Adaptive Search Profile?",
    options: [
      "Index type",
      "Category",
      "Index Configuration",
      "Catalog version",
    ],
    correct: [0],
  },
  {
    question:
      "What type of class should you implement when you need to change the trigger for recalculating the user experience results?",
    options: ["An interceptor", "A populator", "A controller", "A voter"],
    correct: [3],
  },
  {
    question:
      "Why are rule-aware objects (RAOs) used in the rule engine?<br>Note: There are 2 correct answers to this question.",
    options: [
      "To persist the results of the rule evaluation",
      "To provide the data as facts in rule conditions and actions",
      "To eliminate unnecessary data that are provided by complex objects",
      "To store the configuration of the rule engine",
    ],
    correct: [1, 2],
  },
  {
    question:
      "Which features does the Cloud Hot Folders module support?<br>Note: There are 2 correct answers to this question.",
    options: [
      "Media import using external URLs in uploaded ImpEx",
      "Data export into Azure Blob storage",
      "Uploading/processing of zip archives with ImpEx, media, and CSV files",
      "Direct configuration of Hot Folders in the Cloud Portal",
    ],
    correct: [0, 2],
  },
  {
    question:
      "You are creating a business process (mybusinessprocess) that requires an action (actionA) to pass an info String value to another action (actionB) occurring later in the process. Which steps would you typically follow to make this possible?<br>Note: There are 2 correct answers to this question.",
    options: [
      "In the mybusinessprocess.xml definition file, define an info event and configure actionA as the event's originator and actionB as its target. Trigger the event in the class implementing actionA using businessProcessService.triggerEvent(info).",
      "Create an event named myEvent that extends the AbstractProcessEvent and adds an info String property. Register the target action as a listener for this event. Fire the event with eventService.publishEvent(myEvent).",
      "Add the info String as a contextParameter of the existing Business Process model. Cast the contextParameter object back to String to access it in the next action.",
      "Create a myBusinessProcess item type that extends BusinessProcess and adds an info String property. Use an instance of this type to start the process in your java code with businessProcessService.startProcess(new myBusinessProcessModel()).",
    ],
    correct: [2, 3],
  },
];

// Global variables
let selectedQuizSet = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = [];

// DOM elements
const selectionScreen = document.getElementById("selectionScreen");
const quizScreen = document.getElementById("quizScreen");
const quizContainer = document.getElementById("quizContainer");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const counterDiv = document.getElementById("counterDiv");

// Fisher-Yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize the application
function init() {
  updateQuestionCounts();
  setupEventListeners();
}

function updateQuestionCounts() {
  document.getElementById("quiz1Count").textContent =
    `${questions1.length} questions`;
  document.getElementById("quiz2Count").textContent =
    `${questions2.length} questions`;
}

function setupEventListeners() {
  // Quiz selection
  const quizOptions = document.querySelectorAll(".quiz-option");
  const startQuizBtn = document.getElementById("startQuizBtn");

  quizOptions.forEach((option) => {
    option.addEventListener("click", () => {
      quizOptions.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");
      selectedQuizSet = parseInt(option.dataset.quiz);
      startQuizBtn.disabled = false;
    });
  });

  // Start quiz button
  startQuizBtn.addEventListener("click", startQuiz);

  // Submit answer button
  submitBtn.addEventListener("click", submitAnswer);
}

function startQuiz() {
  if (!selectedQuizSet) return;

  // Select the appropriate question set
  const questionSet = selectedQuizSet === 1 ? questions1 : questions2;
  currentQuestions = JSON.parse(JSON.stringify(questionSet)); // Deep copy

  // Shuffle questions
  shuffleArray(currentQuestions);

  // Shuffle options and remap correct answers for each question
  currentQuestions.forEach((q) => {
    let optionObjects = q.options.map((text, idx) => ({
      text,
      originalIndex: idx,
    }));
    shuffleArray(optionObjects);

    q.shuffledOptions = optionObjects.map((obj) => obj.text);
    q.shuffledCorrect = [];
    optionObjects.forEach((obj, idx) => {
      if (q.correct.includes(obj.originalIndex)) {
        q.shuffledCorrect.push(idx);
      }
    });
  });

  // Initialize quiz state
  currentQuestionIndex = 0;
  correctAnswers = [];

  // Show quiz screen
  selectionScreen.style.display = "none";
  quizScreen.style.display = "flex";

  // Display first question
  displayQuestion();
  submitBtn.style.display = "";
}

function resetQuiz() {
  selectedQuizSet = null;
  currentQuestions = [];
  currentQuestionIndex = 0;
  correctAnswers = [];
  const quizOptions = document.querySelectorAll(".quiz-option");
  quizOptions.forEach((opt) => opt.classList.remove("selected"));
  document.getElementById("startQuizBtn").disabled = true;
  resultDiv.textContent = "";
  submitBtn.style.display = "none";
}

function displayQuestion() {
  const q = currentQuestions[currentQuestionIndex];

  // Split at the first <br>
  let questionHTML;
  const brIndex = q.question.indexOf("<br>");
  if (brIndex !== -1) {
    const before = q.question.slice(0, brIndex);
    const after = q.question.slice(brIndex + 4); // skip '<br>'
    questionHTML = `${before}<br><span class="small-after">${after}</span>`;
  } else {
    questionHTML = q.question;
  }

  quizContainer.innerHTML = `
        <div class="question"><b>Q${currentQuestionIndex + 1}:</b> ${questionHTML}</div>
        <div class="options">
            ${q.shuffledOptions
              .map(
                (opt, i) =>
                  `<label>
                    <input type="${q.shuffledCorrect.length > 1 ? "checkbox" : "radio"}" name="option" value="${i}">
                    ${String.fromCharCode(65 + i)}. ${opt}
                </label>`,
              )
              .join("")}
        </div>
        <div class="btn-group">
            <button onclick="prevQuestion()" ${currentQuestionIndex === 0 ? "disabled" : ""}>Previous</button>
            <button onclick="nextQuestion()" ${currentQuestionIndex === currentQuestions.length - 1 ? "disabled" : ""}>Next</button>
        </div>
    `;
  resultDiv.textContent = "";
  updateCounter();
}

window.prevQuestion = function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

window.nextQuestion = function () {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

function submitAnswer() {
  const options = quizContainer.querySelectorAll('input[name="option"]');
  let selected = [];
  options.forEach((opt, i) => {
    if (opt.checked) selected.push(i);
  });

  const q = currentQuestions[currentQuestionIndex];
  if (arrayEquals(selected.sort(), q.shuffledCorrect.slice().sort())) {
    resultDiv.innerHTML = `<span class="correct">Correct!</span>`;
    correctAnswers[currentQuestionIndex] = true;
  } else {
    resultDiv.innerHTML = `<span class="incorrect">Incorrect. Correct answer: ${q.shuffledCorrect
      .map((i) => String.fromCharCode(65 + i))
      .join(", ")}</span>`;
    correctAnswers[currentQuestionIndex] = false;
  }
  updateCounter();
}

// Helper to compare arrays
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function updateCounter() {
  const total = currentQuestions.length;
  // Only count answers that are actually boolean (true or false)
  const answered = correctAnswers.filter(
    (ans) => ans === true || ans === false,
  ).length;
  const correct = correctAnswers.filter((ans) => ans === true).length;
  const percent = answered > 0 ? ((correct / answered) * 100).toFixed(1) : 0;

  counterDiv.innerHTML = `
    <b>Total questions:</b> ${total}<br>
    <b>Questions answered:</b> ${answered}<br>
    <b>Questions answered correctly:</b> ${correct}<br>
    <b>Correct answer percentage:</b> ${percent}%
  `;
}

// Initialize the application when the page loads
document.addEventListener("DOMContentLoaded", init);
