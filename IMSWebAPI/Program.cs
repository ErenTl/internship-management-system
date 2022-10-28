using IMSWebAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            //builder.WithOrigins("http://localhost:7148");
            builder.AllowAnyHeader().AllowAnyMethod()
            .WithOrigins("http://localhost:7148", "https://localhost:7148");
        });
});

builder.Services.AddMvc(option => option.EnableEndpointRouting = false)
                .SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_3_0)
                .AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

builder.Services.AddDbContext<imsdbContext>(options => options.UseNpgsql("Host=localhost;Database=imsdb;Username=postgres;Password=dbpass"));


//builder.Services.AddDbContext<IMSWebAPI.Models.stajtakipdeneme1Context>(opt => opt.UseInMemoryDatabase("item"));


var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();