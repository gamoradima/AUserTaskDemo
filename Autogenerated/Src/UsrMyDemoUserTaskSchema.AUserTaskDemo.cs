namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: UsrMyDemoUserTask

	[DesignModeProperty(Name = "DemoMessage", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "c7120cf7d7e94cf391c8830d04554814", CaptionResourceItem = "Parameters.DemoMessage.Caption", DescriptionResourceItem = "Parameters.DemoMessage.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class UsrMyDemoUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public UsrMyDemoUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("c7120cf7-d7e9-4cf3-91c8-830d04554814");
		}

		#endregion

		#region Properties: Public

		public virtual string DemoMessage {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		public override void WritePropertiesData(DataWriter writer) {
			writer.WriteStartObject(Name);
			base.WritePropertiesData(writer);
			if (Status == Core.Process.ProcessStatus.Inactive) {
				writer.WriteFinishObject();
				return;
			}
			if (!HasMapping("DemoMessage")) {
				writer.WriteValue("DemoMessage", DemoMessage, null);
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "DemoMessage":
					DemoMessage = reader.GetStringValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

