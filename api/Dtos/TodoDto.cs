using System;
namespace WebApi.Dtos
{
    public class TodoDto
    {
        public int id { get; set; }

        public string text { get; set; }

        public int? todo_source { get; set; }

        public int task_id { get; set; }

        public bool completed { get; set; }

    }
}
