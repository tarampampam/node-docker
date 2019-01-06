workflow "New workflow" {
  on = "push"
  resolves = ["Docker Registry"]
}

action "Docker Registry" {
  uses = "actions/docker/login@76ff57a"
}
