using ToDoList.Data.Data.Classes;
using ToDoList.Data.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ToDoList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListController : ControllerBase
    {
        private readonly IToDoListRepository _toDoListRepository;

        public ToDoListController(IToDoListRepository toDoListRepository)
        {
            _toDoListRepository = toDoListRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetContactList()
        {
            List<TaskToDoList> toDoList = await _toDoListRepository.GetToDoListAsync();
            return Ok(toDoList);
        }

       [HttpPost]
        public async Task<IActionResult> AddToDo(TaskToDoList task)
        {
            await _toDoListRepository.CreateNewToDoAsync(task);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> RemoveToDo(int id )
        {
            List<TaskToDoList> toDoList = await _toDoListRepository.RemoveToDo(id);
            return Ok(toDoList);
        }

     
    }
}
