using System;
namespace WebApi.Dtos
{
    public class ShiftTodo
    {
        public int id { get; set; }

        public string name { get; set; }

        public DateTimeOffset? time_start { get; set; }

        public DateTimeOffset? time_end { get; set; }

        public bool? active { get; set; }

    }
}
