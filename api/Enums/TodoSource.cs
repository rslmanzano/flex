using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Interfaces;

namespace WebApi.Enums
{
    public class TodoSource : Enumeration
    {
        public static TodoSource Male = new TodoSource(1, "Personal");
        public static TodoSource Female = new TodoSource(2, "Task");


        protected TodoSource() { }

        public TodoSource(int id, string name) : base(id, name) { }

        public static IEnumerable<TodoSource> List() => new[] { Male, Female };

        public static TodoSource FromName(string name)
        {
            var state = List()
                .SingleOrDefault(s => String.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));

            if (state == null)
            {
                throw new ArgumentException($"Possible values for Todo Source: {String.Join(",", List().Select(s => s.Name))}");
            }

            return state;
        }

        public static TodoSource From(int id)
        {
            var state = List().SingleOrDefault(s => s.Id == id);

            if (state == null)
            {
                throw new ArgumentException($"Possible values for Todo Source: {String.Join(",", List().Select(s => s.Name))}");
            }

            return state;
        }
    }
}
