package frontend

import (
	"html/template"
	"net/http"
)

type Options struct {
	ContextURL   string
	InstanceName string
	HostName     string
}

const indexHTML = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
  <title>Praelatus</title>
</head>
<body>
  <script>
   const CONTEXT_URL = {{ .ContextURL }}
   const INSTANCE_NAME = {{ .InstanceName }}
   const HOST_NAME = {{ .HostName }}
  </script>
  <div id="root"></div>
  <script src="/static/index.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>
</body>
</html>
`

// Router will return a http.Handler that can serve the client
func Router(opts Options) http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("/app/", serveClient(opts))
	mux.Handle("/static/",
		http.FileServer(http.Dir("./static/")))
	return mux
}

func serveClient(opts Options) http.HandlerFunc {
	tmpl := template.
		Must(template.New("index.html").Parse(indexHTML))

	return func(w http.ResponseWriter, r *http.Request) {
		tmpl.Execute(w, opts)
	}
}
