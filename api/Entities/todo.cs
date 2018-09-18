using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Entities
{
    public class todo
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public string text { get; set; }

        public int? todo_source { get; set; }

        public int task_id { get; set; }
       
        public bool completed { get; set; }

        [ForeignKey("task_id")]
        public task task { get; set; }
    }
}
