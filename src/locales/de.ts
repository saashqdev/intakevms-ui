import type { FormKitNode } from '@formkit/core'

export type FormKitValidationI18NArgs = {
  node: FormKitNode
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: any[]
  message?: string
}

export const de = {
  // COMMON
  close: 'Schließen',
  open: 'Offen',
  create: 'Erstellen',
  save: 'Speichern',
  refresh: 'Aktualisieren',
  delete: 'Löschen',
  restart: 'Neustart',
  cancel: 'Stornieren',
  run: 'Start',
  yes: 'Ja',
  no: 'Nein',
  path: 'Weg',
  status: 'Status',
  speed: 'Geschwindigkeit',
  state: 'Zustand',
  name: 'Name',
  description: 'Beschreibung',
  type: 'Typ',
  connection: 'Verbindung',
  connections: 'Verbindungen',
  mounted: 'Montiert',
  options: 'Optionen',
  accessRights: 'Zugriffsrechte',
  generalInformation: 'allgemeine Informationen',
  node: 'Knoten',
  nodes: 'Knoten',
  format: 'Format',
  readOnly: 'Schreibgeschützt',
  createTime: 'Erstellungsdatum',
  startTime: 'Startdatum',
  endTime: 'Enddatum',
  updateTime: 'Datumsänderungen',
  date: 'Datum',
  startDate: 'Startdatum',
  endDate: 'Enddatum',
  time: 'Zeit',
  cluster: 'Cluster',
  search: 'Suchen',
  ram: 'RAM',
  cpu: 'CPU',
  interface: 'Schnittstelle',
  port: 'Hafen',
  ipAddress: 'IP-Adresse',
  ipAddresses: 'IP-Adresse',
  host: 'Gastgeber',
  user: 'Benutzer',
  code: 'Der Code',
  progress: 'Fortschritt',
  message: 'Nachricht',
  uptime: 'Öffnungszeiten',
  alias: 'Spitzname',
  add: 'Hinzufügen',
  day: '0 Tage | {n} Tag | {n} Tag | {n} Tage',
  hour: '0 Std. | {n} Zeit | {n} Std. | {n} die Uhr',
  noData: 'Keine Daten',

  // MODAL
  modal: {
    confirmAction: 'Bestätigen Sie die Aktion',
    listExpand: 'Alle anzeigen',
    listCollapse: 'Alles ausblenden',
    licenseTrial: {
      header: {
        text: `Bei dieser Version der Software handelt es sich um eine Testversion. 
        Nicht für den gewerblichen Gebrauch bestimmt`,
      },
      expiresSoon: {
        title: 'Die Testlizenz läuft bald ab',
        text: `Die Testlizenz läuft ab in {unit}
        Kontaktieren Sie die Aerodisk-Verkaufsabteilung`,
      },
      dontShowAgain: 'Nicht mehr anzeigen',
      closeText: 'OK',
    },
    license: {
      expired: {
        title: 'Der technische Support ist beendet',
        text: `Der technische Support ist abgelaufen
        Kontaktieren Sie die Intakevms-Verkaufsabteilung`,
      },
      expiresSoon: {
        title: 'Der technische Support endet bald',
        text: `Ihr technischer Support läuft ab in {unit}
        Kontaktieren Sie die Aerodisk-Verkaufsabteilung`,
      },
      dontShowAgain: 'Nicht mehr anzeigen',
      closeText: 'OK',
    },
  },

  // FORM
  form: {
    next: 'Nächste',
    back: 'Zurück',
    sizeInput: {
      unit: { label: 'Eine Maßeinheit', placeholder: 'Maßeinheit auswählen' },
      size: { label: 'Größe', placeholder: 'Größe eingeben' },
    },
    fileInput: {
      errors: {
        'file-invalid-type': 'Ungültiger Dateityp',
        uploadError: 'Beim Laden der Datei ist ein Fehler aufgetreten. Versuchen Sie es erneut.',
      },
    },
  },

  // SIZES
  sizes: {
    full: {
      si: {
        B: 'Byte',
        K: 'Kilobyte',
        M: 'Megabyte',
        G: 'Gigabyte',
        T: 'Terabyte',
      },
      iec: {
        B: 'Byte',
        K: 'Kilobyte',
        M: 'Megabyte',
        G: 'Gigabyte',
        T: 'Terabyte',
      },
    },
    short: {
      si: {
        B: 'B',
        K: 'KB',
        M: 'MB',
        G: 'GB',
        T: 'TB',
      },
      iec: {
        B: 'B',
        K: 'KB',
        M: 'MB',
        G: 'GB',
        T: 'TB',
      },
    },
    size: 'Größe',
    volume: 'Volumen',
    used: 'beschäftigt',
    available: 'frei',
    availPercentage: 'beschäftigt (%)',
  },

  // LAYOUT
  sidebar: {
    dashboard: 'Systempanel',
    devices: 'Geräte',
    networkAdapters: 'Netzwerkgeräte',
    physicalDisks: 'Physische Festplatten',
    virtualization: 'Virtualisierung',
    virtualMachines: 'VM (Virtuelle Maschinen)',
    virtualNetworks: 'Virtuelle Netzwerke',
    storage: 'Datenspeicherung',
    storages: 'Lagerung',
    disks: 'Virtuelle Festplatten',
    images: 'Virtuelle Bilder',
    blockDevices: 'Geräte blockieren',
    journal: 'Protokollierung',
  },
  dataTable: {
    rowsPerPage: 'Zeilen anzeigen: {n}',
    bottomCounter: 'Beiträge von {firstIndex} von {lastIndex} aus {total} Aufzeichnungen',
    noData: 'Keine Daten zum Anzeigen',
    columns: 'Spalten',
    cells: { linksList: { collapse: 'Zusammenbruch' } },
  },
  formkit: {
    validation: {
      ip: 'Falsche IP.',
      mac: 'Falscher MAC.',
      uniq: 'Der Wert muss eindeutig sein.',
      multipleOf: ({ args }: FormKitValidationI18NArgs) =>
        `Die Anzahl der ausgewählten Elemente muss ein Vielfaches von sein ${args[0]}.`,
      name: 'Erlaubt sind nur lateinische Buchstaben, Zahlen, Leerzeichen und Unterstriche (_).',
      nameUpper: 'Es sind nur lateinische Großbuchstaben, Zahlen, Leerzeichen und Unterstriche zulässig. (_).',
      login: 'Erlaubt sind nur lateinische Buchstaben, Zahlen und Unterstriche (_) und Bindestrich (-).',
    },
    ui: {},
    inputs: {
      date: { select: 'Wählen' },
      select: { noElements: 'Keine Elemente', empty: 'Leer', optionSearch: 'Suche nach Optionen' },
      file: {
        selectFile: 'Datei auswählen',
        dropzone: 'Oder legen Sie es in diesen Behälter',
        notSelected: 'Datei nicht ausgewählt',
      },
      size: {
        validation: {
          required: 'Feld {name} zum Ausfüllen erforderlich.',
          min: 'Feld {name} darf nicht weniger als {count}.',
          moreThan: '{name} kann nicht mehr sein als {name2}',
        },
      },
    },
    hint: { listExpand: 'Alle anzeigen', listCollapse: 'Alles ausblenden' },
  },
  breadcrumbs: {
    storage: 'Datenspeicherung',
    storages: 'Lagerung',
    virtualization: 'Virtualisierung',
    virtualMachines: 'Virtuelle Maschinen',
    vmCreate: 'Erstellen einer virtuellen Maschine',
    vmEdit: 'Bearbeiten einer virtuellen Maschine',
    virtualNetworks: 'Virtuelle Netzwerke',
    vnetItem: 'Virtuelles Netzwerk',
    devices: 'Geräte',
    networkAdapters: 'Netzwerkgeräte',
    physicalDisks: 'Physische Festplatten',
    blockDevices: 'Geräte blockieren',
    journal: 'Protokollierung',
    disks: 'Virtuelle Festplatten',
    images: 'Virtuelle Bilder',
  },
  header: {
    monitoring: {
      criticals: {
        menu: {
          title: 'Kritische Fehler',
          message: 'Fehler müssen korrigiert werden',
          noMessages: 'Keine kritischen Fehler',
        },
        items: {
          storageSize: { name: 'Nicht genügend freier Speicherplatz', msg: '' },
          ramSize: { name: 'Nicht genügend RAM', msg: '' },
          cpuUsage: { name: 'Kritische CPU-Last', msg: '' },
        },
      },
      warnings: {
        menu: {
          title: 'Wichtige Hinweise',
          noMessages: 'Keine wichtigen Benachrichtigungen',
        },
        items: {
          storageSize: { name: 'Geringer freier Speicherplatz', msg: '' },
          ramSize: { name: 'Wenig RAM', msg: '' },
          cpuUsage: { name: 'Hohe CPU-Last', msg: '' },
        },
      },
    },
    search: {
      placeholder: 'Suchen nach einer Funktion oder Einstellung',
      options: {
        labels: {
          bridgeCreate: 'Erstellen Sie eine Netzwerkbrücke',
          vmCreate: 'VM erstellen',
          vnetCreate: 'Erstellen Sie ein virtuelles Netzwerk',
          storageCreate: 'Erstellen Sie ein Repository',
          volumeCreate: 'Erstellen Sie eine virtuelle Festplatte',
          imageCreate: 'Erstellen Sie ein virtuelles Bild',
          iscsiSessionCreate: 'Erstellen einer iSCSI-Sitzung',
          fibreChannelLipScan: 'Scan Fibre Channel (LIP)',
        },
        descriptions: {
          interface: 'Netzwerkschnittstelle',
          physicalDisk: 'Physische Festplatte',
          virtualMachine: 'Virtuelle Maschine',
          vnet: 'Virtuelles Netzwerk',
          storage: 'Lagerung',
          volume: 'Virtuelle Festplatte',
          image: 'Virtuelles Bild',
          iscsiSession: 'iSCSI-Sitzung',
        },
      },
    },
    accountMenu: {
      logout: {
        title: 'Abmelden',
        modalTitle: 'Abmelden',
        modalText: 'Möchten Sie sich wirklich von Ihrem Konto abmelden?',
        confirmText: 'Abmelden',
      },
    },
  },
  notFound: { title: '404 not found', text: 'Seite nicht gefunden' },
  authForm: { login: 'Login', fields: { username: 'Name', password: 'Passwort' } },

  // API ERRORS
  apiErrors: {
    auth: 'Falsche Anmeldeinformationen',
    canceled: 'Anfrage abgebrochen',
    rpcException: {
      ImageHasAttachmentError: 'Das Image wird in einer virtuellen Maschine verwendet',
      VolumeHasAttachmentError: 'Die Festplatte wird in einer virtuellen Maschine verwendet',
    },
    code: {
      400: 'Etwas ist schief gelaufen',
      403: 'Aktion verboten',
      422: 'Es ist ein Validierungsfehler aufgetreten',
      500: 'Etwas ist schief gelaufen',
    },
  },

  // MODULES
  dashboard: {
    widgets: {
      ramWidget: {
        title: 'RAM',
        used: 'Verwenden.\n({unit})',
        free: 'Frei\n({unit})',
      },
      storageWidget: {
        title: 'Lagerung',
        total: 'Gesamt ({unit})',
        used: 'Verwenden. ({unit})',
        free: 'Frei ({unit})',
      },
      cpuWidget: {
        title: 'CPU',
        cores: 'Kernel',
        threads: 'Streams',
      },
      iopsMonitoringWidget: {
        title: 'Überwachung',
        subtitle: 'IOPS',
        legend: { input: 'Eingeben', output: 'Abschluss' },
      },
      ioLatencyMonitoringWidget: {
        title: 'Überwachung',
        subtitle: 'IO Latency (ms)',
        legend: { wait: 'Verzögerung' },
      },
      ioNetworkBandwidthMonitoringWidget: {
        title: 'Überwachung',
        subtitle: 'Network IO Bandwidth (Mb/s)',
        legend: { read: 'Lektüre', write: 'Aufzeichnen' },
      },
      ioDiskBandwidthMonitoringWidget: {
        title: 'Überwachung',
        subtitle: 'Disk IO Bandwidth (Mb/s)',
        legend: { read: 'Lektüre', write: 'Aufzeichnen' },
      },
      gridSettingsWidget: {
        title: 'Einstellungsfelder',
        modalTitle: 'Einstellungen des Systempanels',
        gridSettings: {
          title: 'Rastereinstellungen',
          changeWidgetSize: 'Größenänderung von Widgets',
          movingWidgets: 'Widgets verschieben',
          disableCollision: 'Kollisionen beim Bewegen entfernen',
          verticalCompact: 'Vertikale Gitterkompaktheit',
        },
        selectWidgets: 'Widgets zur Anzeige auswählen',
        resetSettings: {
          title: 'Zurücksetzen der Systempanel-Einstellungen',
          text: `Möchten Sie die Taskleisteneinstellungen wirklich zurücksetzen?
          Rastereinstellungen und Anzeige-Widgets werden zurückgesetzt`,
          submitText: 'Zurücksetzen',
        },
      },
    },
  },
  devices: {
    networkAdapters: {
      table: {
        mac: 'MAC Adresse',
        mask: 'Maske',
      },
      actions: {
        create: {
          title: 'Erstellen einer Netzwerkbrücke',
          hint: `Beachten Sie bei der Auswahl der Hauptschnittstelle während der Brückenerstellung, dass es zu einer vorübergehenden Unterbrechung des Netzwerks kommen kann. 
          Verbindungen möglich ist. Dies liegt an der Übergangsphase, in der die neue Brücke konfiguriert wird und Arbeit, anstelle der aktuellen Schnittstelle.

          Ein Verbindungsverlust kann zu einer Unterbrechung der Netzwerkdienste führen. Daher wird dringend empfohlen,
          dieses Verfahren für Zeiten geringer Aktivität oder außerhalb der Arbeitszeit. Sie sollten auch sicherstellen, dass Sie alle
          die notwendigen Tools, um die Verbindung bei Problemen wiederherzustellen.`,
          fields: {
            name: { label: 'Name', placeholder: 'Geben Sie Ihren Namen ein' },
            type: { label: 'Schnittstellentyp', placeholder: 'Wählen Sie den Schnittstellentyp aus' },
            interfaces: { label: 'Schnittstellen', placeholder: 'Wählen Sie Schnittstellen aus' },
            ip: { label: 'IP Adresse', placeholder: 'Geben Sie die IP-Adresse an' },
          },
        },
        turnOn: {
          confirm: 'Einschalten',
          single: {
            title: 'Aktivieren eines Netzwerkgeräts',
            text: `Möchten Sie das Netzwerkgerät wirklich aktivieren? {name}?`,
          },
          many: {
            title: 'Aktivieren von Netzwerkgeräten',
            text: 'Möchten Sie wirklich Netzwerkgeräte aktivieren? ({count})?',
          },
        },
        turnOff: {
          confirm: 'Ausschalten',
          single: {
            title: 'Ausschalten eines Netzwerkgeräts',
            text: `Möchten Sie das Netzwerkgerät wirklich ausschalten? {name}?`,
          },
          many: {
            title: 'Netzwerkgeräte ausschalten',
            text: 'Möchten Sie Netzwerkgeräte wirklich ausschalten? ({count})?',
          },
        },
        delete: {
          single: {
            title: 'Entfernen einer Netzwerkbrücke',
            text: 'Möchten Sie die Netzwerkbrücke wirklich löschen? ({name})?',
          },
          many: {
            title: 'Entfernen von Netzwerkbrücken',
            text: 'Möchten Sie die Netzwerkbrücken wirklich entfernen? ({count})?',
          },
        },
      },
    },
    physicalDisks: {
      table: {
        type: 'Gerätetyp',
        fsType: 'FS-Typ',
        fsId: 'FS-ID',
        mountpoint: 'Einhängepunkt',
        children: 'Partitionen',
        parent: 'Elternteil',
      },
      card: {
        backlink: 'Physische Festplatte - {name}',
        tabs: { main: 'Grundeinstellungen', partitions: 'Partitionen' },
        noData: 'Die physischen Datenträgerdaten konnten nicht abgerufen werden. Ein Fehler ist aufgetreten',
        totalSize: 'Gesamtkapazität der Festplatte: ',
      },
      actions: {
        createPartition: {
          title: 'Erstellen Sie eine Partition',
          modalTitle: 'Partitionserstellung',
          hint: 'Auf der Festplatte wird eine Partition erstellt. {name}',
          fields: {
            size: {
              label: 'Größe',
              validation: 'Die Partitionsgröße darf die Festplattengröße nicht überschreiten {size}',
            },
          },
        },
        deletePartition: {
          title: 'Partition löschen',
          form: { select: { label: 'Partitionen', placeholder: 'Wählen Sie Partitionen aus' } },
          many: { title: 'Partitionen entfernen', text: 'Möchten Sie Partitionen wirklich löschen? ({count})?' },
          single: { title: 'Löschen einer Partition', text: 'Möchten Sie die Partition wirklich löschen? {name}?' },
        },
      },
    },
  },
  virtualization: {
    vm: {
      table: {
        cpu: 'Anzahl der CPU',
        cores: 'Kernel',
        threads: 'Threads pro Kern',
        vcpu: 'Virt. Kernel',
        topology: 'CPU-Topologie',
        information: 'Information',
        powerState: {
          header: 'Ernährung',
          shut_off: 'OFF',
          running: 'ON',
        },
      },
      actions: {
        edit: 'Ändern',
        delete: {
          many: {
            title: 'Entfernen virtueller Maschinen',
            text: 'Möchten Sie virtuelle Maschinen wirklich löschen? ({count})?',
          },
          single: {
            title: 'Entfernen einer virtuellen Maschine',
            text: 'Möchten Sie die virtuelle Maschine wirklich löschen? {name}?',
          },
        },
        start: {
          many: {
            title: 'Ausführen virtueller Maschinen',
            text: 'Möchten Sie wirklich virtuelle Maschinen starten? ({count})?',
          },
          single: {
            title: 'Starten einer virtuellen Maschine',
            text: 'Möchten Sie die virtuelle Maschine wirklich starten? {name}?',
          },
        },
        shutOff: {
          title: 'Ausschalten',
          many: {
            title: 'Herunterfahren virtueller Maschinen',
            text: 'Möchten Sie die virtuellen Maschinen wirklich herunterfahren? ({count})?',
          },
          single: {
            title: 'Herunterfahren einer virtuellen Maschine',
            text: 'Möchten Sie die virtuelle Maschine wirklich herunterfahren? {name}?',
          },
        },
        vnc: 'VNC Kunde',
      },
      form: {
        receivingVmError: 'VM-Daten konnten nicht abgerufen werden. Ein Fehler ist aufgetreten',
        tabs: {
          settings: {
            title: 'Einstellungen',
            sections: {
              mainSettings: 'Grundeinstellungen',
              bootComponents: 'Boot-Komponenten',
              ballooning: 'Ballonfahren',
            },
            fields: {
              name: { label: 'Name', placeholder: 'Geben Sie den Namen der VM ein' },
              alias: { label: 'Spitzname', placeholder: 'VM-Alias eingeben' },
              description: { label: 'Beschreibung', placeholder: 'Geben Sie eine Beschreibung der VM ein' },
              osType: { label: 'Betriebssystemtyp', placeholder: 'Wählen Sie den Betriebssystemtyp aus' },
              osVariant: { label: 'Option Betriebssystem', placeholder: 'Wählen Sie die Option Betriebssystem.' },
              bootDevice: { label: 'Boot-Gerät' },
              havm: {
                tooltip: `High Availability Virtual Machine (Hohe Verfügbarkeit der VM)
                Wenn aktiviert, wird diese VM einmal auf einem anderen neu gestartet
                Knoten, wenn der aktuelle Knoten ausfällt`,
                options: { on: 'inkl', off: 'Aus' },
              },
              havmPriority: {
                label: 'Priorität',
                placeholder: 'Geben Sie die HAVM-Priorität ein',
                tooltip: `Je höher die gewählte Zahl, desto höher die Priorität.
                um VM mit HAVM-Funktion zu aktivieren`,
              },
              graphicsDriver: { label: 'Grafiktreiber', placeholder: 'Grafiktreiber auswählen' },
              graphics: { label: 'Zugriffsprotokoll' },
              adl: { label: 'ADL' },
              memory_ballooning: { label: 'Ballonfahren' },
              memory_standard_value: { label: 'Garantierte Erinnerung' },
              memory_period: { label: 'Zeitraum (Sekunden)', placeholder: 'Zeitraum angeben' },
            },
          },
          cpuRamSettings: {
            title: 'CPU/RAM-Einstellungen',
            sections: {
              cpu: 'CPU',
              cpuFeatures: 'CPU-Funktionen',
              ram: 'RAM',
            },
            fields: {
              cpyDynamicTopology: { label: 'Dynamische Topologie' },
              cpuSockets: { label: 'Steckdosen', placeholder: 'Geben Sie die Anzahl der Steckdosen ein' },
              cpuCores: { label: 'Kernel', placeholder: 'Geben Sie die Anzahl der Kerne ein' },
              threads: { label: 'Streams', placeholder: 'Geben Sie die Anzahl der Threads ein' },
              virtualCores: { label: 'Virtuelle Kerne', placeholder: 'Geben Sie die Anzahl der virtuellen Kerne ein' },
              cpuModel: { label: 'CPU-Modell', placeholder: 'Wählen Sie das CPU-Modell aus' },
              cpuFeatures: { placeholder: 'Wählen Sie Optionen aus' },
            },
          },
          disks: {
            title: 'Scheiben',
            modalTitle: 'Laufwerk hinzufügen',
            tabs: {
              existDisk: 'Vorhanden',
              existDiskExtra: 'Zusätzliche Einstellungen für vorhandene',
              new: 'Neu',
              rdm: 'Auswählen einer RDM-Festplatte',
            },
            sections: {
              qos: 'Dienstpriorität (QOS)',
              readWriteSec: 'MB/Sek ',
              iops: 'IOPS',
              diskConfiguration: 'Festplattenkonfiguration',
            },
            fields: {
              variant: {
                options: {
                  exist: 'Wählen Sie eine vorhandene Festplatte aus dem Speicher',
                  rdm: 'Wählen Sie RDM-Datenträger aus',
                  new: 'Erstellen Sie eine neue Festplatte',
                },
              },
              storageType: { label: 'Speichertyp', placeholder: 'Speichertyp auswählen' },
              storageSubtype: { label: 'Repository-Untertyp', placeholder: 'Wählen Sie den Speicheruntertyp aus' },
              disk: {
                headers: { storageName: 'Lagerung', storageType: 'Speichertyp' },
                validationMessage: 'Sie müssen ein Laufwerk auswählen',
              },
              emulation: { label: 'Emulation', placeholder: 'Wählen Sie eine Option' },
              cache: { label: 'Abend', placeholder: 'Wählen Sie eine Option' },
              io: { placeholder: 'Wählen Sie eine Option' },
              rotation: { label: 'Format', placeholder: 'Format auswählen' },
              template: { label: 'Probe', placeholder: 'Wählen Sie eine Option' },
              iopsRead: { label: 'Lektüre' },
              iopsWrite: { label: 'Aufzeichnen' },
              extraSettings: 'Erweiterte Einstellungen',
            },
            validationMessage: 'Sie müssen ein Laufwerk auswählen',
            deleteAction: {
              title: 'Entfernen einer Disc',
              text: 'Möchten Sie die Festplatte wirklich löschen? {name}',
            },
          },
          images: {
            title: 'Virtuelle Bilder',
            btnAdd: 'VO hinzufügen',
            modalTitle: 'Virtuelles Bild hinzufügen',
            backgroundUploading: 'Das Laden der VO im Hintergrund läuft',
            tabs: { exist: 'Vorhanden', new: 'Neu' },
            fields: {
              variant: {
                exist: 'Auswählen eines vorhandenen virtuellen Images',
                new: 'Hochladen eines neuen virtuellen Images',
              },
              storageType: { label: 'Speichertyp', placeholder: 'Speichertyp auswählen' },
              storageSubtype: { label: 'Repository-Untertyp', placeholder: 'Wählen Sie den Speicheruntertyp aus' },
              image: {
                headers: { storageName: 'Lagerung', storageType: 'Speichertyp' },
                validationMessage: 'Sie müssen ein virtuelles Bild auswählen',
              },
            },
            deleteAction: {
              title: 'Entfernen eines virtuellen Images',
              text: 'Möchten Sie das virtuelle Image wirklich löschen? {name}',
            },
          },
          networks: {
            title: 'Netto',
            modalTitle: 'Hinzufügen einer Netzwerkschnittstelle',
            btnAdd: 'Netzwerk hinzufügen',
            validationMessage: 'Sie müssen ein Netzwerk auswählen',
            tabs: {
              variant: 'Typ auswählen',
              bridge: 'Brücke',
              vnet: 'Virtuelles Netzwerk',
              extraSettings: 'Zusätzliche Einstellungen',
            },
            sections: { configuration: 'Konfiguration' },
            fields: {
              variant: {
                label: 'Wählen Sie den Netzwerkschnittstellentyp aus',
                bridge: 'Brücke',
                vnet: 'Virtuelles Netzwerk',
              },
              network: { validationMessage: 'Sie müssen eine Netzwerkschnittstelle auswählen' },
              mode: { label: 'Modus', placeholder: 'Modus auswählen' },
              model: { label: 'Modell', placeholder: 'Modell auswählen' },
              mac: { placeholder: 'Geben Sie die MAC-Adresse ein' },
              vnet: { name: 'Name der Portgruppe', isTrunk: 'Trunk', tags: 'Schlagworte', interface: 'Schnittstelle' },
            },
            deleteAction: {
              title: 'Löschen eines Netzwerks',
              text: 'Möchten Sie das Netzwerk wirklich löschen? {name}',
            },
          },
        },
      },
      card: {
        backlink: 'Virtuelle Maschine',
        noData: 'Daten der virtuellen Maschine konnten nicht abgerufen werden. Ein Fehler ist aufgetreten',
        tabs: {
          main: {
            title: 'Grundlegende Informationen',
            sections: {
              main: 'Grundeinstellungen',
              boot: 'Boot-Komponenten',
            },
            fields: {
              name: 'Name',
              powerState: 'Ernährung',
              description: 'Ernährung',
              information: 'Information',
              osType: 'Betriebssystemtyp',
              osVariant: 'Option Betriebssystem',
              bootDevice: 'Boot-Gerät',
              graphicsDriver: 'Grafiktreiber',
              graphicType: 'Zugriffsprotokoll',
            },
          },
          cpuRam: {
            title: 'CPU/RAM',
            sections: { cpu: 'CPU', ram: 'RAM' },
            fields: {
              sockets: 'Steckdosen',
              cores: 'Kerne',
              threads: 'Streams',
              cpuModel: 'CPU-Modell',
              topology: 'Topologie',
              vCores: 'Virt. Kernel',
              size: 'Volumen',
            },
          },
          disks: { title: 'Scheiben', noData: 'Keine Festplatten' },
          images: { title: 'Virtuelle Bilder', noData: 'Es fehlen virtuelle Bilder' },
          network: { title: 'Netto', noData: 'Keine Netzwerke' },
        },
        formBacklink: { create: 'Erstellen einer virtuellen Maschine', edit: 'Bearbeiten einer virtuellen Maschine' },
      },
    },
    virtualNetworks: {
      table: {
        portgroups: 'Portgruppe',
        forwardMode: 'Weiterleitungsmodus',
        bridge: 'Brücke',
        virtualPortType: 'Untergruppentyp',
        autostart: 'Autostart',
        persistent: 'Konstante',
      },
      actions: {
        create: {
          title: 'Erstellen eines virtuellen Netzwerks',
          fields: {
            name: { label: 'Name', placeholder: 'Geben Sie Ihren Namen ein' },
            forwardMode: { label: 'Weiterleitungsmodus', placeholder: 'Wählen Sie den Weiterleitungsmodus' },
            bridge: { label: 'Brücke', placeholder: 'Wählen Sie eine Brücke aus' },
            virtualPortType: { label: 'Untergruppentyp', placeholder: 'Wählen Sie den Untergruppentyp aus' },
            portGroups: {
              label: 'Portgruppen',
              name: 'Name',
              isTrunk: 'Trunk',
              tags: 'Schlagworte',
            },
          },
        },
        delete: {
          many: {
            title: 'Virtuelle Netzwerke löschen',
            text: 'Möchten Sie virtuelle Netzwerke wirklich löschen ({count})?',
          },
          single: {
            title: 'Virtuelles Netzwerk löschen',
            text: 'Möchten Sie das virtuelle Netzwerk wirklich löschen {name}?',
          },
        },
        turnOn: {
          title: 'Einschalten',
          many: {
            title: 'Aktivieren Sie virtuelle Netzwerke',
            text: 'Möchten Sie virtuelle Netzwerke wirklich aktivieren ({count})?',
          },
          single: {
            title: 'Aktivieren Sie das virtuelle Netzwerk',
            text: 'Möchten Sie das virtuelle Netzwerk wirklich aktivieren {name}?',
          },
        },
        turnOff: {
          title: 'Ausschalten',
          many: {
            title: 'Schalten Sie virtuelle Netzwerke aus',
            text: 'Möchten Sie virtuelle Netzwerke wirklich deaktivieren ({count})?',
          },
          single: {
            title: 'Schalten Sie das virtuelle Netzwerk aus',
            text: 'Möchten Sie das virtuelle Netzwerk wirklich deaktivieren {name}?',
          },
        },
        createPortgroup: {
          title: 'Portgruppe hinzufügen',
          modalTitle: 'Hinzufügen einer Portgruppe',
          submitText: 'Hinzufügen',
          fields: {
            name: { label: 'Name', placeholder: 'Geben Sie Ihren Namen ein' },
            tags: {
              label: 'Schlagworte',
              placeholder: 'Geben Sie das Tag an und klicken Sie auf Enter',
              noSelect: 'Keine Tags',
            },
            isTrunk: { label: 'Trunk' },
          },
        },
        deletePortgroup: {
          title: 'Portgruppe löschen',
          modalTitle: 'Löschen von Portgruppen',
          portgroup: { name: 'Name', isTrunk: 'Trunk', tags: 'Schlagworte' },
        },
      },
    },
  },
  storages: {
    table: {
      storageType: 'Speichertyp',
      available: 'Verfügbar',
      information: 'Info',
    },
    actions: {
      create: {
        title: 'Erstellen',
        modalTitle: 'Erstellen eines Repositorys',
        form: {
          tabs: {
            storageType: 'Speichertyp',
            configuration: 'Konfiguration',
            disk: 'Scheibe',
          },
          fields: {
            storageType: { label: 'Speichertyp', placeholder: 'Speichertyp auswählen' },
            common: {
              name: { label: 'Name', placeholder: 'Namen eingeben' },
              description: { label: 'Beschreibung', placeholder: 'Geben Sie eine Beschreibung ein' },
            },
            nfs: {
              ip: { label: 'IP-Adresse', placeholder: 'Geben Sie die IP-Adresse an' },
              path: { label: 'Weg', placeholder: 'Geben Sie den Pfad an' },
            },
            localFs: {
              fsType: { label: 'Dateisystem', placeholder: 'Dateisystem auswählen' },
              path: { headers: { path: 'Weg', size: 'Größe', type: 'Gerätetyp' } },
            },
          },
        },
      },
      delete: {
        many: {
          title: 'Löschen von Repositorys',
          text: 'Möchten Sie die Repositories wirklich löschen ({count})?',
        },
        single: {
          title: 'Löschen eines Repositorys',
          text: 'Möchten Sie den Speicher wirklich löschen {name}?',
        },
      },
    },
    disks: {
      table: {
        attachments: 'Virtuelle Maschinen',
        storage: 'Lagerung',
        information: 'Info',
        readOnly: 'Nur lesen',
      },
      actions: {
        create: {
          title: 'Erstellen',
          modalTitle: 'Erstellen Sie eine virtuelle Festplatte',
          fields: {
            name: { label: 'Laufwerksname', placeholder: 'Geben Sie den Laufwerksnamen ein' },
            description: { label: 'Beschreibung', placeholder: 'Geben Sie eine Beschreibung ein' },
            storage: { label: 'Lagerung', placeholder: 'Speicher auswählen' },
            format: { label: 'Disc-Format', placeholder: 'Wählen Sie das Disc-Format' },
            size: {
              label: 'Festplattengröße',
              validation:
                'Die Datenträgergröße darf die Menge an freiem Speicherplatz im Pool nicht überschreiten {size}',
            },
            read_only: { label: 'Schreibgeschützt' },
          },
        },
        delete: {
          single: {
            title: 'Löschen einer virtuellen Festplatte',
            text: 'Möchten Sie die virtuelle Festplatte wirklich löschen {name}?',
          },
          many: {
            title: 'Entfernen virtueller Festplatten',
            text: 'Möchten Sie virtuelle Datenträger wirklich löschen ({count})?',
          },
        },
        extend: {
          title: 'Lautstärke erhöhen',
          formTitle: 'Erhöhen der Festplattenkapazität',
          submitText: 'Zunahme',
          formHint: 'Die Festplattenkapazität wird erhöht {name}',
          formInput: {
            label: 'Neue Festplattenkapazität',
            validationMessages: {
              maxSize:
                'Die neue Datenträgergröße darf die Menge an freiem Speicherplatz im Speicher nicht überschreiten {size}',
              minSize: 'Die neue Festplattengröße kann nicht kleiner sein als die aktuelle {size}',
            },
          },
        },
        edit: {
          title: 'Ändern',
          formTitle: 'Ändern einer virtuellen Festplatte',
          formHint: 'Die virtuelle Festplatte wird geändert {name}',
        },
      },
    },
    images: {
      table: {
        attachments: 'Virtuelle Maschinen',
        storage: 'Lagerung',
        information: 'Info',
      },
      actions: {
        upload: {
          title: 'Herunterladen',
          modalTitle: 'Laden eines virtuellen Bildes',
          uploadingProgress: 'Datei wird geladen',
          fields: {
            name: {
              label: 'Name',
              placeholder: 'Geben Sie Ihren Namen ein',
              validationTaken: 'Name bereits verwendet',
            },
            description: { label: 'Beschreibung', placeholder: 'Bitte geben Sie eine Beschreibung an' },
            image: {
              buttonText: 'Wählen Sie einen Look',
              dropzone: 'Oder platzieren Sie das Bild in diesem Container',
              notSelected: 'Bild nicht ausgewählt',
            },
            storageId: {
              label: 'Lagerung',
              placeholder: 'Speicher auswählen',
              validationMessage: 'Freier Speicherplatz überschritten',
            },
          },
        },
        delete: {
          many: {
            title: 'Löschen virtueller Images',
            text: 'Möchten Sie virtuelle Bilder wirklich löschen ({count})?',
          },
          single: {
            title: 'Entfernen eines virtuellen Images',
            text: 'Möchten Sie das virtuelle Image wirklich löschen {name}?',
          },
        },
      },
    },
    card: {
      backlink: 'Lagerung',
      tabs: {
        main: {
          title: 'Grundlegende Informationen',
          fields: {
            information: 'Information',
            userId: 'ID Benutzer',
            fsType: 'FS-Typ',
            mountPoint: 'Einhängepunkt',
            mountVersion: 'Version',
          },
        },
        volumes: {
          title: 'Scheiben',
        },
      },
    },
  },
  blockDevices: {
    table: { port: 'Hafen' },
    actions: {
      scan: {
        title: 'Scan (LIP)',
        modalTitle: 'Scannen Fibre Channel',
        text: `Ein Scan wird auf den Fibre Channel-Hostadaptern mit dem Protokoll durchgeführt 
        LIP (Loop Initialization Protocol). Mit dieser Methode können Sie neue entdecken und hinzufügen 
        Geräte mit dem Netzwerk Fibre Channel`,
        confirmText: 'Scan',
      },
      login: {
        title: 'Login',
        modalTitle: 'iSCSI-Sitzungsanmeldung',
        fields: {
          ip: { label: 'IP', placeholder: 'Angeben IP' },
          port: { label: 'Hafen', placeholder: 'Port angeben' },
        },
      },
      logout: {
        title: 'Abmelden',
        many: {
          title: 'Sitzungsabmeldung',
          text: 'Möchten Sie sich wirklich von den Sitzungen abmelden ({count})?',
        },
        single: {
          title: 'Sitzungsabmeldung',
          text: 'Möchten Sie sich wirklich von der Sitzung abmelden {name}?',
        },
      },
    },
  },
  journal: {
    table: {
      module: 'Modul',
      event: 'Ereignis',
      information: 'Info',
      objectId: 'ID Objekt',
      timestamp: 'Datum',
      userId: 'ID Benutzer',
    },
    actions: {
      download: {
        title: 'Herunterladen',
      },
    },
  },
  settings: {
    settings: 'Einstellungen',
    interfaceSettings: 'Schnittstelleneinstellungen',
    clusterSettings: 'Clustereinstellungen',
    adlSettings: {
      title: 'ADL-Einstellungen',
      cpuThreshold: { label: 'CPU-Schwellenwert in %', placeholder: 'Geben Sie den CPU-Schwellenwert ein' },
      ramThreshold: { label: 'RAM-Grenzwert in %', placeholder: 'Geben Sie den RAM-Schwellenwert ein' },
      nodesParticipants: { label: 'Teilnehmende Knoten', placeholder: 'Wählen Sie teilnehmende Knoten aus' },
    },
    RAMOverwriting: {
      enable: 'RAM-Überbelegung aktivieren',
      nodes: 'Knoten zur erneuten Anmeldung',
      nodesSelect: 'Wählen Sie Knoten aus',
    },
    theme: 'Thema',
    themes: {
      dark: 'Dunkel',
      darkBlue: 'Dunkelblau',
      light: 'Licht',
    },
    locale: 'Sprache',
    locales: {
      de: '🇩🇪 Deutsche',
      en: '🇨🇦 English',
    },
    sizeNotation: 'Maßeinheiten',
    oldVersion: 'Wechseln Sie zur alten Schnittstelle',
    sizeNotations: {
      iec: 'IEC-Binär (KiB, MiB, GiB, TiB)',
      si: 'SI-Dezimal (KB, MB, GB, TB)',
    },
    sizeNotationsDesc: {
      iec: `Kilobyte (KiB) 2^10 Bytes
        Megabyte (MiB) 2^20 Bytes
        Gigabyte (GiB) 2^30 Bytes
        Terabyte (TiB) 2^40 Bytes`,
      si: `Kilobyte (KB) 10^3 Bytes
       Megabyte (MB) 10^6 Bytes
       Gigabyte (GB) 10^9 Bytes
       Terabyte (TB) 10^12 Bytes`,
    },
  },
}
