using ContactList.Data.Data.Classes;
using ContactList.Data.Data.Context;
using ContactList.Data.Data.Intitializer;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using ToDoList.Data.Data.Classes;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>();

builder.Services.AddTransient<IToDoListRepository, ToDoListRepository>();

builder.Services.AddSpaStaticFiles(configuration => {
    configuration.RootPath = "clientApp/build";
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseSpaStaticFiles();


app.MapControllers();


await AppInitializer.Seed(app);
app.Run();



