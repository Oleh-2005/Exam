using ContactList.Data.Data.Context;
using ToDoList.Data.Data.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Data.Data.Intitializer
{
    public class AppInitializer
    {
        public static async Task Seed(IApplicationBuilder applicationBuilder)
        {
            
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (!context.ToDoList.Any())
                {
                    context.ToDoList.AddRange(
                            new TaskToDoList()
                            {
                                Name =  "Earn some money"
                            },
                             new TaskToDoList()
                             {
                                 Name = "Buy a car"
                             },
                              new TaskToDoList()
                              {
                                  Name = "Wash the car"
                              }
                        );
                    await context.SaveChangesAsync();
                }
                await context.SaveChangesAsync();
            }
        }
    }
}
