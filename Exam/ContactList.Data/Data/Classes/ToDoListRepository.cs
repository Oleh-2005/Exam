using ContactList.Data.Data.Context;
using ToDoList.Data.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Data.Data.Classes
{
    public class ToDoListRepository : ToDoList.Data.Data.Classes.IToDoListRepository
    {
        //AppDbContext AppDbContext { get; set; }
        public async Task CreateNewToDoAsync(TaskToDoList user)
        {
            using (var context = new AppDbContext())
            {
              await context.ToDoList.AddAsync(user);
                context.SaveChanges();
            }
        }       

        public async Task<List<TaskToDoList>> GetToDoListAsync()
        {
            using(var context = new AppDbContext())
            {
                return await context.ToDoList.ToListAsync();
            }
        }      

        public async Task<List<TaskToDoList>> RemoveToDo(int id)
        {
            using (var context = new AppDbContext())
            {
                var contacts = await context.ToDoList.FirstOrDefaultAsync(x => x.Id == id);
                if (contacts != null)
                {
                    context.ToDoList.Remove(contacts);
                    context.SaveChanges();
                }
            }
            return await GetToDoListAsync();
        }

      
    }
}
