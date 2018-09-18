using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Dtos;
using WebApi.Entities;

namespace WebApi
{
	[Route("api/[controller]")]
    public class TasksController
    {
		Entities.DataContext dbContext;
		public TasksController(Entities.DataContext dbContext) => this.dbContext = dbContext;

  //      [HttpGet]
  //      public async Task<IEnumerable<task>>Get()
		//{
  //          var query = dbContext.tasks.AsQueryable();

  //          query = query.OrderByDescending(s => s.dateDue);
  //          return await query.ToListAsync();
		//}

        [HttpGet]
        public IEnumerable<TaskDto> Get()
        {
            var query = dbContext
                .tasks
                .Include("todos")
                .Select(t => new TaskDto
                {
                    id = t.id,
                    subject = t.subject,
                    status_id = t.status_id,
                    dateStart = t.dateStart,
                    actualWorkHours = t.actualWorkHours,
                    actualWorkUnit_id = t.actualWorkUnit_id,
                    client_id = t.client_id,
                    dateComplete = t.dateComplete,
                    dateDue = t.dateDue,
                    dateReminder = t.dateReminder,
                    description = t.description,
                    hasReminder = t.hasReminder,
                    project_id = t.project_id,
                    timeReminder = t.timeReminder,
                    totalWorkHours = t.totalWorkHours,
                    totalWorkUnit_id = t.totalWorkUnit_id,
                    user_id = t.user_id,
                    todoCount = t.todos.Count(p => p.completed == false)
                    //todos = t.todos.Select(p => new TodoDto
                    //{
                    //    id = p.id,
                    //    text = p.text,
                    //    todo_source = p.todo_source,
                    //    task_id = p.task_id,
                    //    completed = p.completed

                    //})
                });

            //query = query.OrderByDescending(s => s.dateDue);
            return query.ToList();
        }

		[HttpGet("{id}")]
		public async Task<task> Get(int id)
		{
			return await dbContext.tasks.Where(t => t.id == id).FirstOrDefaultAsync();
		}

        [HttpPost]
		public async Task<task> Post([FromBody]task value)
		{
			dbContext.tasks.Add(value);
			await dbContext.SaveChangesAsync();
			return value;
		}
		[HttpPut("{id}")]
		public async Task<task> Put(int id, [FromBody]task value)
		{
			var entity = dbContext.tasks.Where(t => t.id == id).FirstOrDefault();
			entity.subject = value.subject;
            entity.dateDue = value.dateDue;
            entity.dateStart = value.dateStart;
            entity.dateComplete = value.dateComplete;
            entity.status_id = value.status_id;
            entity.hasReminder = value.hasReminder;
            entity.dateReminder = value.dateReminder;
            entity.timeReminder = value.timeReminder;
            entity.totalWorkHours = value.totalWorkHours;
            entity.totalWorkUnit_id = value.totalWorkUnit_id;
			entity.actualWorkHours = value.actualWorkHours;
			entity.actualWorkUnit_id = value.actualWorkUnit_id;
            entity.project_id = value.project_id;
            entity.client_id = value.client_id;
            entity.description = value.description;
            entity.user_id = value.user_id;

			await dbContext.SaveChangesAsync();
			return entity;
		}
		[HttpDelete("{id}")]
		public async Task<task> Delete(int id)
        {
			var entity = dbContext.tasks.Where(t => t.id == id).FirstOrDefault();
			dbContext.tasks.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }    }
}
