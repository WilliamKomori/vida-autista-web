using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VidaAutistaDotnet.Domain.Entities
{
    public class Calendario
    {
        [Column("id_calendario")]
        public int Id { get; set; }

        [Column("id_usuario")]
        public int IdUsuario { get; set; }

        [Column("nome")]
        public string Nome { get; set; }

        [Column("data_hora_evento")]
        public DateTime DataHora { get; set; }

        [Column("anotacoes")]
        public string Anotacao { get; set; }

        [Column("tipo_evento")]
        public string TipoEvento { get; set; }

    }
}
