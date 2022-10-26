using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VidaAutistaDotnet.Application.DTO
{
    public class CalendarioDTO
    {
      public int Id { get; set; }
      public int IdUsuario { get; set; }
      public string Nome { get; set; }
      public DateTime DataHora { get; set; }
      public string Anotacao { get; set; }
      public string TipoEvento { get; set; }
  }
}
