 /**
 * Parent: ProcessFlowElementPropertiesPage
 */
define("UsrMyDemoUserTaskPropertiesPage", ["terrasoft", "UsrMyDemoUserTaskPropertiesPageResources",
	"ProcessSchemaUserTaskUtilities"],
		function(Terrasoft, resources, UserTaskUtilities) {
			return {
				messages: {},
				mixins: {},
				attributes: {
					/**
					 * Connection object.
					 */
					"DemoMessage": {
						dataValueType: this.Terrasoft.DataValueType.TEXT,
						type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
						caption: resources.localizableStrings.DemoMessageCaption,
						initMethod: "initProperty",
						doAutoSave: true,
						isRequired: true
					}
				},
				methods: {},
				diff: /**SCHEMA_DIFF*/[
					{
						"operation": "insert",
						"name": "UserTaskContainer",
						"propertyName": "items",
						"parentName": "EditorsContainer",
						"className": "Terrasoft.GridLayoutEdit",
						"values": {
							"itemType": Terrasoft.ViewItemType.GRID_LAYOUT,
							"items": []
						}
					},
					{
						"operation": "insert",
						"name": "TitleTaskContainer",
						"propertyName": "items",
						"parentName": "UserTaskContainer",
						"className": "Terrasoft.GridLayoutEdit",
						"values": {
							"layout": {
								"column": 0,
								"row": 0,
								"colSpan": 24
							},
							"itemType": Terrasoft.ViewItemType.GRID_LAYOUT,
							"items": [],
							"classes": {
								"wrapClassName": ["link-entity-to-process-user-task-properties-page"]
							}
						}
					},
					{
						"operation": "insert",
						"name": "WhatPageToOpenLabel",
						"parentName": "TitleTaskContainer",
						"propertyName": "items",
						"values": {
							"layout": {
								"column": 0,
								"row": 0,
								"colSpan": 24
							},
							"itemType": Terrasoft.ViewItemType.LABEL,
							"caption": {"bindTo": "Resources.Strings.DemoMessageCaption"},
							"classes": {"labelClass": ["t-title-label-proc"]}
						}
					},
					{
						"operation": "insert",
						"parentName": "TitleTaskContainer",
						"propertyName": "items",
						"name": "DemoMessage",
						"values": {
							"layout": {
								"column": 0,
								"row": 1,
								"colSpan": 24,
								"rowSpan": 1
							},
							"wrapClass": ["top-caption-control"]
						}
					}
				]
			};
		}
);
