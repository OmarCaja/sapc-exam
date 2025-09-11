// QUESTIONS
let questions = [
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
      "Which of the following statements regarding the platform module of SAP Commerce Cloud is incorrect?",
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
      "Which of the following frontends are offered out-of-the-box in SAP Commerce Cloud?",
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
      "In SAP Commerce Cloud, features are typically packaged in which of the following units?",
    options: ["Modules", "Extensions", "Functions/Methods", "Classes"],
    correct: [0, 1],
  },
  {
    question:
      "Which Java Development Kit (JDK) version can you use to compile SAP Commerce Cloud?",
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
      "SAP Commerce Cloud is a multilayered application. Identify the layers from the following options:",
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
      "Which of the following statements are correct in relation to extension templates?",
    options: [
      "When executing 'ant extgen’, the extension templates are copied to the custom folder",
      "Extension templates are not compiled during the ant build when declared in localextensions.xml",
      "Extension templates are out-of-the-box extensions of SAP Commerce Cloud",
      "Extension template can be directly customized to meet a specific project requirement",
    ],
    correct: [0, 2],
  },
  {
    question: "Which Spring technologies are used in SAP Commerce Cloud?",
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
      "What does the build framework do when you call 'ant' or 'ant all'?",
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
      "Which of the following requires your attention, regarding extension dependencies?",
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
      "Which of the following statements about SAP Commerce Cloud's Initialization and Update processes is true?",
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
      "Which of the following actions are possible within your custom backoffice extension?",
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
      "What actions can you perform in the Application Orchestrator within Backoffice?",
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
      "Which of the following statements are correct regarding Backoffice configuration xml files?",
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
      "Which of the following responses regarding Backoffice and Backoffice Framework are correct?",
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
      "Which of the following files are required when defining a custom widget type?",
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
      "Which of the following responses are accurate regarding item types in items.xml?",
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
      "Which of the following responses are correct regarding deployment in the context of data modeling?",
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
      "Which of the following responses are correct regarding relations and collections?",
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
      "When working with localized data, which of the following statements are true?",
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
      "Which of the following options correctly states all the types that can be defined in items.xml?",
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
      "Which of the following accurately describe the out-of-the-box data models in SAP Commerce Cloud's product content management?",
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
      "Which of the following key facts correctly represent classification systems?",
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
      "Which of the following product modeling approaches are offered out-of-the-box in SAP Commerce Cloud?",
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
      "How do you compare the classification approach with the type system approach?",
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
      "Which of the following statements about catalog synchronization are correct?",
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
      "Which of the following responses is correct regarding the UPDATE operation?",
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
      "When referencing another item in ImpEx, attention can be applied to which of the following responses?",
    options: [
      "You cannot reference another item if it has no business key",
      "You can use document ID to replace a business key for referencing another item",
      "You can use the business key of another item as a reference",
      "You can use the PK of another item as a reference.",
    ],
    correct: [1, 2],
  },
  {
    question: "Which of the following statements is a valid ImpEx header?",
    options: [
      "INSERT_UPDATE Customer;uid;name",
      "INSERT Customer;uid;name",
      "REMOVE Customer;uid",
      "UPDATE Customer;uid;name",
    ],
    correct: [1],
  },
  {
    question: "Which of the following statements about ImpEx are true?",
    options: [
      "It is closely related to database",
      "You can use ImpEx to create, update, export, and remove items",
      "ImpEx is an out-of-the-box XML-based import and export framework",
      "ImpEx can be used to create backups",
    ],
    correct: [1, 3],
  },
  {
    question: "Where can you launch ImpEx?",
    options: [
      "In Backoffice",
      "Through API Invocation",
      "Via business processes",
      "In SmartEdit",
    ],
    correct: [0, 1],
  },
  {
    question: "What are the major features of Flexible Search?",
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
      "Which of the following are valid keywords and operators in Flexible Search?",
    options: ["ASC", "DISTINCTED", "LIKE", "COMBINE"],
    correct: [0, 2],
  },
  {
    question:
      "Which of the following statements apply when writing Flexible Search queries related to relations?",
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
      "What are the best practices to follow when building flexible search queries in Java code?",
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
      "Regarding transaction management in SAP Commerce Cloud, which of the following are correct?",
    options: [
      "You can use the tx XML schema",
      "You can use the SAP Commerce Transaction API",
      "You can change the isolation level of a transaction when using the @Transactional annotation",
      "JTA user transaction interface is provided",
    ],
    correct: [0, 1],
  },
  {
    question: "What is the service layer in SAP Commerce Cloud?",
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
      "Regarding model classes, which of the following statements is not correct?",
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
      "Which of the following is not a supported function of modelService?",
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
      "Which of the following statements are correct regarding Data Transfer Objects (DTOs)?",
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
      "Which of the following does the commercefacades extension provide?",
    options: [
      "ShoppingFacade to handle the shopping phase",
      "OrderFacade to manage the order placement process",
      "OrderFacade to display details of submitted orders and the order history",
      "UserFacade to support user account operations",
    ],
    correct: [2, 3],
  },
  {
    question: "What can you do with a populator?",
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
      'You have defined two independent extensions. (1) extension1-beans.xml:(2) extension2-beans.xml: When you execute "ant all", what will happen?',
    options: [
      "Ant fails to build, because we can’t define the same DTO class in two different extensions",
      "Ant build is successful, with only class A generated in the platform extension",
      "Ant build is successful, with two classes of A generated in the two different extensions",
      "Ant fails to build, because the compiler doesn’t know from which extension the class A can be generated first",
    ],
    correct: [1],
  },
  {
    question:
      "You extended the product type by injecting an additional attribute to the product type. You also want to show the new attribute value on the product detail page. What should you do to proceed?",
    options: [
      "The new attribute will be handled by the default product converter automatically",
      "Extend the product DTO to include the new attribute, then do a mapping from the new attribute in items.xml to the beans.xml, so that the default product converter can populate the value directly",
      "Extend the product DTO to include the new attribute and Implement a new converter to convert it",
      "Extend the product DTO to include the new attribute. Then, implement a new populator to fill the value. And finally, append the populator to the default product converter",
    ],
    correct: [3],
  },
];

// Fisher-Yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questions);

// On page load, shuffle options and remap correct answers for each question
questions.forEach((q) => {
  // Map each option to its original index
  let optionObjects = q.options.map((text, idx) => ({
    text,
    originalIndex: idx,
  }));
  shuffleArray(optionObjects);

  // Save shuffled options
  q.shuffledOptions = optionObjects.map((obj) => obj.text);

  // Remap correct indices
  q.shuffledCorrect = [];
  optionObjects.forEach((obj, idx) => {
    if (q.correct.includes(obj.originalIndex)) {
      q.shuffledCorrect.push(idx);
    }
  });
});

let currentQuestionIndex = 0;
// Track correct answers for each question; initially all false
const correctAnswers = []; // Don't fill with false!

const quizContainer = document.getElementById("quizContainer");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const counterDiv = document.getElementById("counterDiv");
// Initialize the quiz immediately
currentQuestionIndex = 0;
displayQuestion();
submitBtn.style.display = "";

function displayQuestion() {
  const q = questions[currentQuestionIndex];

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
            <button onclick="nextQuestion()" ${currentQuestionIndex === questions.length - 1 ? "disabled" : ""}>Next</button>
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
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

submitBtn.addEventListener("click", function () {
  const options = quizContainer.querySelectorAll('input[name="option"]');
  let selected = [];
  options.forEach((opt, i) => {
    if (opt.checked) selected.push(i);
  });
  const q = questions[currentQuestionIndex];
  if (arrayEquals(selected.sort(), q.shuffledCorrect.slice().sort())) {
    resultDiv.innerHTML = `<span class="correct">Correct!</span>`;
    correctAnswers[currentQuestionIndex] = true; // Set to true only when submitted and correct
  } else {
    resultDiv.innerHTML = `<span class="incorrect">Incorrect. Correct answer: ${q.shuffledCorrect
      .map((i) => String.fromCharCode(65 + i))
      .join(", ")}</span>`;
    correctAnswers[currentQuestionIndex] = false; // Set to false only when submitted and incorrect
  }
  updateCounter();
});

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
  const total = questions.length;
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
