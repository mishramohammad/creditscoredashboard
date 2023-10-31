using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

//add services to the container.
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//enable CORS
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();

/** CORS defines a way for client web applications that are loaded in one domain to interact 
with resources in a different domain. 
This is useful because complex applications often reference third-party APIs 
and resources in their client-side code*/