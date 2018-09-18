using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WebApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "auth_user_roles",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_auth_user_roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "auth_users",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    auth_user_level = table.Column<int>(type: "int4", nullable: false),
                    auth_user_role_id = table.Column<int>(type: "int4", nullable: false),
                    employee_id = table.Column<int>(type: "int4", nullable: false),
                    password_hash = table.Column<byte[]>(type: "bytea", nullable: true),
                    password_salt = table.Column<byte[]>(type: "bytea", nullable: true),
                    username = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_auth_users", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "clients",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    active = table.Column<bool>(type: "bool", nullable: false),
                    name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clients", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "employees",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    code = table.Column<string>(type: "text", nullable: true),
                    created_by_id = table.Column<int>(type: "int4", nullable: false),
                    data_of_birth = table.Column<DateTime>(type: "timestamp", nullable: false),
                    date_created = table.Column<DateTime>(type: "timestamp", nullable: false),
                    date_modified = table.Column<DateTime>(type: "timestamp", nullable: false),
                    email_address = table.Column<string>(type: "text", nullable: true),
                    employee_status_id = table.Column<int>(type: "int4", nullable: false),
                    gender_id = table.Column<int>(type: "int4", nullable: false),
                    given_name = table.Column<string>(type: "text", nullable: true),
                    mobile_number = table.Column<string>(type: "text", nullable: true),
                    modified_by_id = table.Column<int>(type: "int4", nullable: false),
                    other_given_name = table.Column<string>(type: "text", nullable: true),
                    prefix = table.Column<string>(type: "text", nullable: true),
                    suffix = table.Column<string>(type: "text", nullable: true),
                    surname = table.Column<string>(type: "text", nullable: true),
                    tfn = table.Column<string>(type: "text", nullable: true),
                    work_type_id = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employees", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "employment_types",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    active = table.Column<bool>(type: "bool", nullable: false),
                    name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employment_types", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Lookups",
                columns: table => new
                {
                    lookup_id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    lookup_name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lookups", x => x.lookup_id);
                });

            migrationBuilder.CreateTable(
                name: "projects",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    client_id = table.Column<int>(type: "int4", nullable: true),
                    name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projects", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "tasks",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    actualWorkHours = table.Column<float>(type: "float4", nullable: true),
                    actualWorkUnit_id = table.Column<int>(type: "int4", nullable: true),
                    client_id = table.Column<int>(type: "int4", nullable: true),
                    dateComplete = table.Column<DateTime>(type: "timestamp", nullable: true),
                    dateDue = table.Column<DateTime>(type: "timestamp", nullable: true),
                    dateReminder = table.Column<DateTime>(type: "timestamp", nullable: true),
                    dateStart = table.Column<DateTime>(type: "timestamp", nullable: true),
                    description = table.Column<string>(type: "text", nullable: true),
                    hasReminder = table.Column<bool>(type: "bool", nullable: true),
                    project_id = table.Column<int>(type: "int4", nullable: true),
                    status_id = table.Column<int>(type: "int4", nullable: true),
                    subject = table.Column<string>(type: "text", nullable: false),
                    timeReminder = table.Column<DateTime>(type: "timestamp", nullable: true),
                    totalWorkHours = table.Column<float>(type: "float4", nullable: true),
                    totalWorkUnit_id = table.Column<int>(type: "int4", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tasks", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "auth_user_roles");

            migrationBuilder.DropTable(
                name: "auth_users");

            migrationBuilder.DropTable(
                name: "clients");

            migrationBuilder.DropTable(
                name: "employees");

            migrationBuilder.DropTable(
                name: "employment_types");

            migrationBuilder.DropTable(
                name: "Lookups");

            migrationBuilder.DropTable(
                name: "projects");

            migrationBuilder.DropTable(
                name: "tasks");
        }
    }
}
