using ToDoList.Data.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Data.Data.Classes
{
    public interface IToDoListRepository
    {
        Task CreateNewToDoAsync(TaskToDoList task);
        Task<List<TaskToDoList>> GetToDoListAsync();
        Task<List<TaskToDoList>> RemoveToDo(int id);
    }
}
