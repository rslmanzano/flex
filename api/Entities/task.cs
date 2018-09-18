using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Entities
{
    public class task
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity), Required]
		public int id { get; set; }

        [Required]
        public string subject { get; set; }

        public DateTime? dateDue { get; set; }

        public DateTime? dateStart { get; set; }

        public DateTime? dateComplete { get; set; }

		public int? status_id { get; set; }

        public bool? hasReminder { get; set; }

		public DateTime? dateReminder { get; set; }

		public DateTime? timeReminder { get; set; }

		public float? totalWorkHours { get; set; }

		public int? totalWorkUnit_id { get; set; }

		public float? actualWorkHours { get; set; }

		public int? actualWorkUnit_id { get; set; }

		public int? project_id { get; set; }

		public int? client_id { get; set; }

        public string description { get; set; }

        public int? user_id { get; set; }

        public List<todo> todos { get; set; }
	}
}