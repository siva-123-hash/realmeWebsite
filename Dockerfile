FROM tomcat:9.0-jdk21
LABEL company="Realme Mobile"

# Copy JSP app into Tomcat ROOT
COPY ../src/*.jsp /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080
CMD ["catalina.sh", "run"]

