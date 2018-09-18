using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Entities
{
    public class shift
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public string name { get; set; }

        public TimeSpan? time_start { get; set; }

        public TimeSpan? time_end { get; set; }

        public bool? active { get; set; }
    }
}
